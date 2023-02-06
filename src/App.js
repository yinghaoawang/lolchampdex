import CardList from './components/card-list/card-list.component';
import './App.css';
import React from 'react';
import SearchBox from './components/search-box/search-box.component';
import ChampionDetails from './components/champion-details/champion-details.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      champions: [],
      selectedChampion: null,
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
    this.setState(() => {return {searchKey};});
  }

  onClickChampion = (event, champion) => {
    this.setState(() => {return {selectedChampion: champion};});
  }

  render() {
    const { onSearchChange, onClickChampion } = this;
    const { champions, selectedChampion, searchKey } = this.state;
    const filteredChampionKeys = Object.keys(champions).filter((key) => champions[key].name.toLowerCase().includes(searchKey.toLowerCase()));
    const filteredChampions = filteredChampionKeys.map((key) => champions[key]);
    return (
      <div className="flex overflow-hidden">
        <div className='flex flex-col items-center bg-gray-500 overflow-y-auto h-screen w-[600px] p-2'>
          <SearchBox onChangeHandler={onSearchChange} placeholder='search champions' className='search-box' />
          <CardList champions={filteredChampions} onClickHandler={onClickChampion} />
        </div>
        <ChampionDetails className='w-full bg-blue-300 overflow-y-auto h-screen' champion={selectedChampion} />
      </div>
    );
  }
}

export default App;
