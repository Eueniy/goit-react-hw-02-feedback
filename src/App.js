import React, { Component } from "react";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import FeedbackOptions from "./components/FeedbackOptions";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState((state) => ({ ...state, [name]: this.state[name] + 1 }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = ({ good } = this.state) => {
    return good ? Math.round((good * 100) / this.countTotalFeedback()) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Welcome to cafe Expresso!</h1>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleChange}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}
