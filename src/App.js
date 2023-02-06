import logo from './logo.svg';
import './App.css';
import React from 'react';

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
        console.log(championData);
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
    return (
      <div className="App">
        <input placeholder='search champions' onChange={onSearchChange} />
        {filteredChampionKeys.map((key) => {
          const champion = champions[key];
          return <li key={champion.id}>{champion.name}</li>;
        })}
      </div>
    );
  }
}

export default App;
