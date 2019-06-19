import React, { Component } from "react";
import { Button, Header, Image, Modal, } from "semantic-ui-react";

import Adapter from "../Adapter";
import FeedbackContainer from "./FeedbackContainer";
import App from "../App";
import FeedbackForm from "./FeedbackForm"

class GameDetails extends Component {
  state = {
    feedbacks: [],
    // userInput: ""
  }

  componentDidMount() {
    Adapter.getGameFeedbacks(this.props.game.id)
    .then(feedbacks => this.setState({ feedbacks }))
  }

//   inputChangedHandler = (event) => {
//       this.setState({userInput: event.target.value})
//   }

  render() {
    return (
      <Modal open={this.props.game} onClose={ this.props.deselectGame }>
        <Modal.Header>{this.props.game.name}</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="large"
            src={this.props.game.background_image}
            alt={this.props.game.slug}
          />
          <Modal.Description>
            <Header>Feedback:</Header>
            <hr />
            <FeedbackContainer feedbacks = { this.state.feedbacks } />
            <FeedbackForm game={this.props.game} game_id={this.props.game_id} feedbacks={this.state.feedbacks}/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );

    // <div>
    //     <button onClick={ this.props.deselectGame}>X</button>
    //     <h2>{ this.props.game.name}</h2>
    //     <img width={290} src={this.props.game.background_image} alt={this.props.game.slug} title={this.props.game.slug} />
    //     <FeedbackContainer feedbacks = { this.state.feedbacks }/>
    // </div>
  }
}

export default GameDetails;
