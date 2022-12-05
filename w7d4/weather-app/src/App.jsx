import { useState } from "react";
import { getCleanWeatherData, fetchWeatherData } from "./helpers/weatherHelpers";

import Header from "./components/Header";
import CityNameSearch from "./components/CityNameSearch";
import CityHistoryList from "./components/CityHistoryList";
import CurrentWeather from "./components/CurrentWeather";

import "./App.css";
import { dummyList, dummyWeatherData } from "./data/dummyData";
import { useEffect } from "react";

function App() {
  const [cityHistory, setCityHistory] = useState(dummyList);
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);

  // const currentWeatherData = getCleanWeatherData(weatherData);

  const updateWeatherData = (cityName) => {
    setIsLoading(true);
    setTimeout(() => {
      fetchWeatherData(cityName)
        .then((cleanData) => setWeatherData(cleanData))
        .catch((err) => {
          console.log(err);
          setWeatherData(null);
        })
        .finally(() => setIsLoading(false));
    }, 1500);
  };

  // Callback is ran under conditions
  // Return value of useEffect will be ran before the next render

  useEffect(() => {
    const report = (event) =>
      console.log(`Clicked at position ${event.clientX},${event.clientY}`);

    document.addEventListener("click", report);
    console.log("Ran the useEffect");

    return () => {
      document.removeEventListener("click", report);
      console.log("Ran the useEffect Cleanup");
    };
  });

  useEffect(() => {
    console.log("Count has changed");
  }, [count]);
  useEffect(() => {
    if (currentCity) {
      updateWeatherData(currentCity);
    }
  }, [currentCity]);

  useEffect(() => {
    console.log("What?");
  }, []);

  useEffect(() => {
    updateWeatherData("Patate");
  }, []);

  // useEffect(() => {
  //   console.log(weatherData && weatherData.cityName);
  // }, [weatherData]);

  // updateWeatherData("Toronto");

  const updateCityName = (cityName) => {
    setCurrentCity(cityName);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <p>Count is {count}</p>
          <button onClick={() => setCount(count + 1)}>increment</button>
        </section>
        <CityNameSearch onSubmit={updateWeatherData} />
        {isLoading && <div className="loader"></div>}
        {/* <CityHistoryList cities={cityHistory}/> */}
        {!isLoading && weatherData && <CurrentWeather {...weatherData} />}
      </main>
    </div>
  );
}

export default App;
