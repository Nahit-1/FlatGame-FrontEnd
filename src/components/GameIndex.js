import React from "react";
import API from "../services/api";
import GameCard from "./GameCard";
import { Card } from "semantic-ui-react";

const bestGames = [
  "Metal Gear Solid 5: The Phantom Pain",
  "Marvel's Spider-Man",
  "Red Dead Redemption 2",
  "Horizon: Zero Dawn",
  "God of War",
  "World of Warcraft",
  "Minecraft",
  "BioShock",
  "The Witcher 3: Wild Hunt",
  "Divinity: Original Sin 2",
  "Pokemon Let's Go Pikachu",
  "Tetris 99",
  "Mario Kart 8 Deluxe",
  "Super Mario Odyssey",
  "The Legend of Zelda: Breath of the Wild",
  "Apex Legends",
  "Metal Gear Solid 5: The Phantom Pain",
  "Fallout 4",
  "Red Dead Redemption",
  "The Witcher 3: Wild Hunt"
];

class GameIndex extends React.Component {
  state = {
    games: []
  };

  componentDidMount = () => {
    bestGames.forEach(game => {
      API.getSingleGame(game).then(data => {
        this.setState({ games: [...this.state.games, data] });
      });
    });
  };

  // const getGameDetails = new Promise((resolve, reject) => {
  //   let games = []
  //   bestGames.forEach((game, index) => {
  //     API.getSingleGame(game).then(data => {
  //       games.push(game)
  //       if (games.length === bestGames.length) {
  //         resolve(games)
  //       }
  //     });
  //   });
  // })

  // getGameDetails.then(games => this.setState(games)}

  mapAllGames = () => {
    return this.state.games.map(game => <GameCard key={game.id} game={game} />);
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
