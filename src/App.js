import CardList from './components/card-list/card-list.component';
import './App.css';
import React from 'react';
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      champions: [],
      searchKey: ''
    };
  }
  
  componentDidMount() {
    fetch('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
      .then(res => res.json())
      .then(data => {
        let championData = data.data;
        this.setState(() => {
          return {champions: championData};
        });
      });
  }

  onSearchChange = (event) => {
    const searchKey = event.target.value;
    this.setState(() => {return {searchKey}});
  }

  render() {
    const { onSearchChange } = this;
    const { champions, searchKey } = this.state;
    const filteredChampionKeys = Object.keys(champions).filter((key) => key.toLowerCase().includes(searchKey.toLowerCase()));
    const filteredChampions = filteredChampionKeys.map((key) => champions[key]);
    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='search champions' className='search-box' />
        <CardList champions={filteredChampions} />
      </div>
    );
  }
}

export default App;
