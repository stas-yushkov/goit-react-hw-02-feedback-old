import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './StyledComponents';
import countTotalFeedback from '../../utils/countTotalFeedback'
import countPositiveFeedbackPercentage from '../../utils/countPositiveFeedbackPercentage'

const Statistics = (props) => {
  const { good, neutral, bad } = props.stats

  return (
    <div>
      <Title>Statistics</Title>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback(props.stats)}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage(props.stats)}</p>
    </div>
  )
};

Statistics.defaultProps = {
  stats: {
    good: 0,
    neutral: 0,
    bad: 0
  }
}

Statistics.propTypes = {
  stats: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  })
}

export default Statistics;