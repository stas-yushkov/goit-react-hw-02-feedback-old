import React from 'react';
import PropTypes from 'prop-types';


const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
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