import React from "react";
// import {Grid} from 'semantic-ui-react'
import { Card } from "semantic-ui-react";

class GameCard extends React.Component {
  render() {
    // const { game } = this.props

    return (
      <Card>
        <img
          width={250}
          src="https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg"
          alt=""
        />
        <p>Testing</p>
      </Card>
    );
  }
}

export default GameCard;
