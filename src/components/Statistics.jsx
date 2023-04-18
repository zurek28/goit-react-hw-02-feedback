import Notification from './Notification';
import PropTypes from 'prop-types';

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  if (total === 0) {
    return (
      <>
        <Notification message="There is no feedback" />
      </>
    );
  }

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
}

export default Statistics;
