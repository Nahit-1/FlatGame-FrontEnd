import React from "react";
// import API from "../services/api";
import GameCard from "./GameCard";
import { Card } from "semantic-ui-react";

const URL = 'http://localhost:3001'
const gamesURL = URL + '/games'

class GameIndex extends React.Component {

  componentDidMount() {
    console.log("game index mounted");
  }
  state = {
    games: []
  };

  getAllGames = () =>
    fetch(gamesURL)
    .then(resp => resp.json());

  componentDidMount = () => {
    this.getAllGames()
    .then(games => this.setState({ games }));
  };


  mapAllGames = () => {
    return this.state.games.map(game => <GameCard key={game.id} game={game} />);
  };

  render() {
    return (
      <div>
        <Card.Group>
          {this.mapAllGames()}
        </Card.Group>
      </div>
    );
  }
}

export default GameIndex;
