import React from 'react';
import './App.css';
import GameIndex from './components/GameIndex'
import Nav from './components/Nav';
import GameDetails from './components/GameDetails';
import Adapter from './Adapter';

const URL = 'http://localhost:3001'
const gamesURL = URL + '/games'

class App extends React.Component {

  state = {
    games: [],
    searchTerm: "",
    filterByRating: 0,
    selectedGame: null,
  };

  getAllGames = () =>
    fetch(gamesURL)
    .then(resp => resp.json());

  componentDidMount = () => {
    this.getAllGames()
    .then(games => this.setState({ games }));
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value.toLowerCase() })
  }

  handleFilter = (e) => {
    e.target.value === "No Filter" ? this.setState({ filterByRating: 0 }) : this.setState({ filterByRating: +e.target.value})
  }

  selectGame = (game) => {
    this.setState({
      selectedGame: game
    })
  }

  deselectGame = () => {
    this.setState({
      selectedGame: null
    })
  }

  displayGames = () => {
    if (this.state.filterByRating){
      return this.state.games.filter((game)=> {
        return game.metacritic >= this.state.filterByRating
      })
    } else {
      return this.state.games
    }
  }
  
  render() {
    return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Nav handleFilter={this.handleFilter} handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
      { this.state.selectedGame && <GameDetails game={this.state.selectedGame} deselectGame={ this.deselectGame } /> }
      <GameIndex games={this.displayGames()} searchTerm={this.state.searchTerm} selectGame={ this.selectGame }/>
      <br />
      <p> Made by Danny Wakeling and Nahit Abu-Nijaila </p>
    </div>
    )}
}

export default App;
