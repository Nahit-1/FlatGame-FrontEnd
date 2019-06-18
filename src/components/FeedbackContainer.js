import React from "react";

const FeedbackContainer = props => {
    console.log(props.feedbacks)
  return (
      
    <div>
      <ul>
        {props.feedbacks.map(feedback => (
          <li> {feedback.content} </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackContainer;
