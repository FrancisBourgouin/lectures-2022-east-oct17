export default function CurrentWeather(props) {
  const { currentWeather, currentCity } = props;
  const temperature = Math.round(currentWeather.main.temp - 273.15);
  const conditions = currentWeather.weather[0].description;

  return (
    <section className="CurrentWeather">
      <h2>Weather for {currentCity || "..."}</h2>
      <p>{conditions}</p>
      <p>{temperature}°C</p>
    </section>
  );
}
