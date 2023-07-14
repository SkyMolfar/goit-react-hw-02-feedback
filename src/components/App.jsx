import React, { Component } from 'react';


import { Container, NoFeedback } from "./App.styled";
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: { good: 0, neutral: 0, bad: 0 } };
  }

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      feedback: { ...prevState.feedback, [type]: prevState.feedback[type] + 1 },
    }));
  };

  countTotalFeedback = () => {
    const { feedback } = this.state;
    const values = Object.values(feedback);
    return values.reduce((total, value) => total + value, 0);
  };

  calculatePositivePercentage = () => {
    const { good } = this.state.feedback;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { feedback } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.calculatePositivePercentage();

    return (
      <Container>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <NoFeedback>No feedback given</NoFeedback>
          ) : (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}




