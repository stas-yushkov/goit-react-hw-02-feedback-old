import { Component } from 'react';

import { FeedbackOptions, Statistics, Section, Notification } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback(this.state)) * 100);

  handleLeaveFeedback = name => {
    this.setState(currentState => ({ [name]: currentState[name] + 1 }));
  };

  render() {
    const feedbackOptions = Object.keys(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state);
    const total = this.countTotalFeedback();
    const isShowStatistics = total > 0;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

          <Section title="Statistics">
        {isShowStatistics && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
        )}
        {!isShowStatistics && (
            <Notification message="No feedback given" />
        )}
          </Section>
      </div>
    );
  }
}

export default App;
