import React from 'react';
import { Form } from "semantic-ui-react";
import Adapter from "../Adapter";
import { thisTypeAnnotation } from '@babel/types';

class FeedbackForm extends React.Component {

    

    render() {
        return (

            <form class="ui form" onSubmit={ this.processForm }>
                <div class="field">
                <label for='feedback'>Add Feedback!</label>
                <input type="text" name='feedback'/>
                </div>
            </form>
        )
    }

    processForm = (e) => {
        e.preventDefault()
        Adapter.newFeedback(e.target.feedback.value, this.props.game.id, 61)
            .then(feedback => this.props.addFeedback(feedback))
            .then(e.target.feedback.value = '')
    }


   
    
}

// I need to call Adapter.newFeedback()
// pass in this.props.game_id & content with (hard coded user_id)


export default FeedbackForm

