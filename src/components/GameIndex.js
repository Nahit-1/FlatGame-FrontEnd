import React from "react";
import GameCard from "./GameCard";
import { Card } from "semantic-ui-react";

class GameIndex extends React.Component {
  // mapAllGames = () => {
  //   if (this.props.searchTerm) {
  //     // debugger;
  //     return this.props.games.filter(game => {
  //       if (game.name.toLowerCase().includes(this.props.searchTerm)) {
  //         return <GameCard key={game.id} game={game} />;
  //       }
  //     });
  //   } else {
  //     return this.props.games.map(game => (
  //       <GameCard key={game.id} game={game} />
  //     ));
  //   }
  // };

  render() {
    return (
      <div>
        <Card.Group>
          {this.props.games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default GameIndex;
