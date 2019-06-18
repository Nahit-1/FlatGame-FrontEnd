import React from "react";
import GameCard from "./GameCard";
import { Card } from "semantic-ui-react";

class GameIndex extends React.Component {

  mapAllGames = (props) => {
    if (this.props.searchTerm){
      props.games.map((game) => {    
        if (game.name.toLowerCase().includes(props.searchTerm)){
          (<GameCard key={game.id} game={game}/> )
        }
      })
    }
    return this.props.games.map( game => <GameCard key={game.id} game={game}/>)
  }


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
