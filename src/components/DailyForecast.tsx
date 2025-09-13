function DailyForecastItem() {
  return (
    <li>
      <article>
        <h3>Tue</h3>
        <span>20°</span>
        <span>14°</span>
      </article>
    </li>
  );
}

export default function DailyForecast() {
  return (
    <section>
      <h2>Daily Forecast</h2>
      <ul>
        <DailyForecastItem />
      </ul>
    </section>
  );
}
