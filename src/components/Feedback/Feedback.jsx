import React, { Component } from "react";
import { Button } from "Feedback.styled";

export class Feedback extends Component {
  render() {
    return (
      <>
        <Button onClick={() => this.props.onFeedback("good")}>Good</Button>
        <Button onClick={() => this.props.onFeedback("neutral")}>Neutral</Button>
        <Button onClick={() => this.props.onFeedback("bad")}>Bad</Button>
      </>
    );
  }
}






