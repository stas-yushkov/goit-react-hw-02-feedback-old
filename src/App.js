import feedbackOptions from './data/feedbackOptionsData.json'

import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/'
import Statistics
  from './components/Statistics';
import Section from './components/Section'
import { Container } from './components';
import countTotalFeedback from './utils/countTotalFeedback'
import countPositiveFeedbackPercentage from './utils/countPositiveFeedbackPercentage'

const initialState = feedbackOptions.reduce((acc, option) => {
    return {...acc, ...{ [option]: 1 }};
  },{});

class App extends Component {
  state = initialState;

  manageState = (e) => {
    const name = e.target.dataset.name

    this.setState((currentState) => ({ [name]: currentState[name] + 1 }))
  }

  render() {
    return (
      <>
      <Section title='Please leave feedback'>
        <Container>
          {/*<FeedBackOptions buttonList={feedbackOptions} handleIncrement={this.manageState} />*/}
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.manageState} />
        </Container>
      </Section>

    <Section title='Statistics'>
        <Container>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback(this.state)}
            positivePercentage={countPositiveFeedbackPercentage(this.state)}
          />
        </Container>
      </Section>

      </>

    )
  }
}

export default App;
