import { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    return (
      <div>
        <Section title="Please leave a feedback">
          <h1>Please leave a feedback</h1>
          <FeedbackOptions
            // options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.state.positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
