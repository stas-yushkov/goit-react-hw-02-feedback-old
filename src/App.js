import feedbackOptions from './data/feedbackOptionsData.json'

import React, { Component } from 'react';
import FeedBackOptions from './components/FeedBackOptions/'
import Statistics
  from './components/Statistics';
import { Container } from './components';
import { Section } from './components/Section';

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
      <Section>
        <Container>
          <FeedBackOptions buttonList={feedbackOptions} handleIncrement={this.manageState} />
          <Statistics stats={this.state}/>
        </Container>
      </Section>
    )
  }
}

export default App;
