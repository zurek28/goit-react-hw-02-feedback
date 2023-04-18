function FeedbackOptions({ options, onLeaveFeedback }) {
  let { good, neutral, bad, total, positivePercentage } = options;
  const handleClick = event => {
    const name = event.target.name;

    if (name === 'good') {
      good += 1;
    } else if (name === 'neutral') {
      neutral += 1;
    } else if (name === 'bad') {
      bad += 1;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();

    onLeaveFeedback({
      good: good,
      neutral: neutral,
      bad: bad,
      total: total,
      positivePercentage: positivePercentage,
    });
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;

    total = totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const positive = Math.round((good / total) * 100);

    positivePercentage = positive;
  };

  return (
    <>
      <button name="good" onClick={handleClick}>
        Good
      </button>
      <button name="neutral" onClick={handleClick}>
        Neutral
      </button>
      <button name="bad" onClick={handleClick}>
        Bad
      </button>
    </>
  );
}

export default FeedbackOptions;
