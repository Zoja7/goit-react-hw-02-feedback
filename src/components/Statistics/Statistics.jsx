export default function Statistics({ feedback, positivePercentage, total }) {
  const { good, neutral, bad } = feedback;
  return (
    <div>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total()}</li>
        <li> Positive feedback:{positivePercentage()}%</li>
      </ul>
    </div>
  );
}
