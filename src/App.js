
import React from 'react';
import './App.css';
import GameIndex from './components/GameIndex'
import Nav from './components/Nav';
import GameDetails from './components/GameDetails';
import Adapter from './Adapter';


const URL = "http://localhost:3001";
const gamesURL = URL + "/games";

class App extends React.Component {
  state = {
    games: [],
    searchTerm: "",
    filterByRating: 0,
    selectedGame: null,
    filterByGenre: ""
  };

  getAllGames = () => fetch(gamesURL).then(resp => resp.json());

  componentDidMount = () => {
    this.getAllGames().then(games => this.setState({ games }));
  };

  handleSearch = e => {
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  handleRatingFilter = e => {
    e.target.value === "No Filter"
      ? this.setState({ filterByRating: 0 })
      : this.setState({ filterByRating: +e.target.value });
  };


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

  handleGenreFilter = e => {
    e.target.value === "No Filter"
      ? this.setState({ filterByGenre: "" })
      : this.setState({ filterByGenre: e.target.value });
  };

  filterGamesByRating = collection => {
    if (this.state.filterByRating) {
      return collection.filter(game => {
        return game.metacritic >= this.state.filterByRating;
      });

    } else {
      return collection;
    }
  };

  filterGamesByGenre = collection => {
    if (this.state.filterByGenre) {
      return collection.filter(game => {
        return game.genre.toLowerCase() === this.state.filterByGenre;
      });
    } else {
      return collection;
    }
  };

  filterBySearch = collection => {
    return collection.filter(game => {
      if (this.state.searchTerm) {
        return game.name.toLowerCase().includes(this.state.searchTerm);
      } else {
        return true;
      }
    });
  };

  applyAllFiltersToGames = collection => {
    return this.filterBySearch(
      this.filterGamesByGenre(this.filterGamesByRating(collection))
    );
  };

  render() {
    return (

      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Nav
          handleRatingFilter={this.handleRatingFilter}
          handleGenreFilter={this.handleGenreFilter}
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
         { this.state.selectedGame && <GameDetails game={this.state.selectedGame} deselectGame={ this.deselectGame } /> }
        <GameIndex
          games={this.applyAllFiltersToGames(this.state.games)} selectGame={ this.selectGame }
        />
        <br />
        <p> Made by Danny Wakeling and Nahit Abu-Nijaila </p>
      </div>
    );
  }

}

export default App;
