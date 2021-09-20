import PropTypes from 'prop-types';

import { ListItem } from './Statistics.styled';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <ul>
      <ListItem>Good: {good}</ListItem>
      <ListItem>Neutral: {neutral}</ListItem>
      <ListItem>Bad: {bad}</ListItem>
      <ListItem>Total: {total}</ListItem>
      <ListItem>Positive feedback: {positivePercentage} %</ListItem>
    </ul>
  );
};

Statistics.defaultProps = {
  stats: {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  },
};

Statistics.propTypes = {
  stats: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};

export { Statistics };
