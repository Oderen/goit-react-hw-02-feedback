import css from '../FeedbackOptions/Feedback.module.css';

export default function FeedbackOptions({
  good,
  neutral,
  bad,
  onLeaveFeedback,
}) {
  return (
    <>
      <button className={css.buttons} onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={css.buttons} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={css.buttons} onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
}
