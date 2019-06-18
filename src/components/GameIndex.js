import React from "react";
import GameCard from "./GameCard";
import { Card } from "semantic-ui-react";

class GameIndex extends React.Component {


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
