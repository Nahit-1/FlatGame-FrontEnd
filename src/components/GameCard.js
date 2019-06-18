import React from "react";
import { Card } from "semantic-ui-react";

class GameCard extends React.Component {

  mapAndFormatGenres = () => {
    const genreArray = []
    this.props.game.genres.map(g => genreArray.push(g.name))
    return genreArray.join(', ')
  }

  render() {
    const { game } = this.props;

    return (
      <Card>
        <div>
          <h1 className="text-center"> {game.name}</h1>
          <img width={250} src="" alt="" />
          <p>Link to game: </p>
          <p>Rating: {game.rating}</p>
          <p>Genres: {this.mapAndFormatGenres()}</p>
        </div>
      </Card>
    );
  }
}

export default GameCard;

