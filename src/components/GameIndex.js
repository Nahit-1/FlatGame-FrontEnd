import React from "react";
import API from "../services/api";
import GameCard from "./GameCard";
import { Card } from "semantic-ui-react";

class GameIndex extends React.Component {
  state = {
    games: [],
    gamesImages: []
  };

  getAllGames = () => {
    API.getGames().then(games => this.setState({ games }));
  };

  getAllGamesImages = () => {
    API.getGamesImages().then(gamesImages => this.setState({ gamesImages }));
  }

  componentDidMount = () => {
    this.getAllGames();
  };

  mapAllGames = () => {
    return this.state.games.map(game => <GameCard key={game.id} game={game} gameImages={this.gamesImages} />);
  };

  render() {
    return (
      <div>
        <Card.Group>{this.mapAllGames()}</Card.Group>
      </div>
    );
  }
}

export default GameIndex;
