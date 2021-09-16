const countTotalFeedback = (stats) => {
  return Object.values(stats).reduce((acc,value) => acc + value, 0);
};

export default countTotalFeedback;