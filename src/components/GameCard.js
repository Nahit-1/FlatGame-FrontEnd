import React from "react";
import { Card } from "semantic-ui-react";

class GameCard extends React.Component {
  render() {
    const { game } = this.props
    const GR = game.rating
    return (
      <Card>
        <h1 className="text-center">{game.name}</h1>
        <img width={290}
          src="https://media.wired.com/photos/5b2ac221714d3b70d9ed7f87/master/pass/fortnite_switch.jpg"
          alt=""
        />
        <p>Link to game: {game.url}</p>
        <p>Rating: {GR ? GR.toFixed(2) : GR}</p>
        <p>Genres: {game.genres}</p>
      </Card>
    );
  }
}

export default GameCard;
