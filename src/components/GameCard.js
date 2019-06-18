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
        <div className="text-center">
          <h1> {game.name}</h1>
          <img width={290} src={game.background_image} alt={game.slug} title={game.slug} />
          <p>Rating: {game.metacritic ? game.metacritic : 'No Rating'}</p>
          <p>Genre: {game.genre}</p>
        </div>
      </Card>
    );
  }
}

export default GameCard;

