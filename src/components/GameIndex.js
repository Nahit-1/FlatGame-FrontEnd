import React from "react";
import GameCard from "./GameCard";
import { Card } from "semantic-ui-react";

class GameIndex extends React.Component {

  mapAllGames = () => {
    if (!!this.props.searchTerm){
      return this.props.games.map(game => {    
        if (game.name.toLowerCase().includes(this.props.searchTerm)){
          return (<GameCard key={game.id} game={game} selectGame={this.props.selectGame}/> )
        }
      })
    }
    return this.props.games.map( game => <GameCard key={game.id} game={game} selectGame={this.props.selectGame}/>)
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
