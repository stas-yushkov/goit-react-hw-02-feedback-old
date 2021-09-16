import countTotalFeedback from './countTotalFeedback'

const countPositiveFeedbackPercentage = (stats) => {

  const positiveFeedbackPercentage = Math.round(stats.good / countTotalFeedback(stats) * 100)
  return `${positiveFeedbackPercentage}%`;
};

export default countPositiveFeedbackPercentage;