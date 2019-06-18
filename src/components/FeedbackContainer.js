import React from 'react';

const FeedbackContainer = (props) => {
   return <ul>
        {
            props.feedbacks.map(feedback => <li> {feedback.content} </li>)
        }
    </ul>
}

export default FeedbackContainer