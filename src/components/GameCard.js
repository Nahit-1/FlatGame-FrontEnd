import React from "react";
import { Card, Rating, Image } from "semantic-ui-react";

class GameCard extends React.Component {
  render() {
    const { game } = this.props;

    return (
      <Card className="link">
        <Card.Content onClick={() => this.props.selectGame(game)}>
          <Card.Header> {game.name} </Card.Header>
        </Card.Content>
        <Image
          onClick={() => this.props.selectGame(game)}
          src={game.background_image}
          alt={game.slug}
          title={game.slug}
          style={{ height: "200px" }}
          fluid
        />
        <Card.Content>
          <Card.Description>
            Rating: {game.metacritic ? game.metacritic : "No Rating"}
          </Card.Description>
          <Card.Description>Genre: {game.genre}</Card.Description>
          <Rating className="star" maxRating="5" size="huge" />
        </Card.Content>
      </Card>
    );
  }
}

// <Card className="ui card link centered">
//         <div
//           className="text-center"
//           onClick={() => this.props.selectGame(game)}
//         >
//           <Card.Header> {game.name} </Card.Header>
//           <Image
//             src={game.background_image}
//             alt={game.slug}
//             title={game.slug}
//             size="medium"
//           />
//           <Card.Content>
//             <p>Rating: {game.metacritic ? game.metacritic : "No Rating"}</p>
//             <p>Genre: {game.genre}</p>
//             <Rating className="star" maxRating="5" size="huge" />
//           </Card.Content>
//         </div>
//       </Card>

export default GameCard;
