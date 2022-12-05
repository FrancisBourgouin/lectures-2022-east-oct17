export default function CurrentWeather(props) {
  const { cityName, description, temperature } = props;
  return (
    <section className="CurrentWeather">
      <h1>Current weather for {cityName}</h1>
      <p>It is currently {temperature}°C</p>
      <p>And it's {description}</p>
    </section>
  );
}
