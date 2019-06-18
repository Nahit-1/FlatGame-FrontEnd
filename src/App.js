import React from "react";
import "./App.css";
import GameIndex from "./components/GameIndex";
import Nav from "./components/Nav";

const URL = "http://localhost:3001";
const gamesURL = URL + "/games";

class App extends React.Component {
  state = {
    games: [],
    searchTerm: "",
    filterByRating: 0,
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
    // debugger;
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
    // if (this.state.searchTerm) {
    //   // debugger;
    //   return this.state.games.filter(game => {
    //     if (game.name.toLowerCase().includes(this.state.searchTerm)) {
    //       return <GameCard key={game.id} game={game} />;
    //     }
    //   });
    // } else {
    //   return this.state.games.map(game => (
    //     <GameCard key={game.id} game={game} />
    //   ));
    // }
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
        <GameIndex
          games={this.applyAllFiltersToGames(this.state.games)}
        />
        <br />
        <p> Made by Danny Wakeling and Nahit Abu-Nijaila </p>
      </div>
    );
  }
}

export default App;
