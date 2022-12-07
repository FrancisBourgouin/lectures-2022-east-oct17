export default function CityHistoryList(props) {
  const { cityList, updateCurrentCity, currentCity } = props;

  const isArray = Array.isArray(cityList);

  const parsedButtons =
    isArray &&
    cityList.map((city) => (
      <li key={city}>
        <button onClick={() => updateCurrentCity(city)}>{city}</button>
      </li>
    ));

  return (
    <section className="CityHistoryList">
      <h2>Previously searched cities</h2>
      <ul>{parsedButtons}</ul>
    </section>
  );
}
