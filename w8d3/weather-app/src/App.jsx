import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import CityHistoryList from "./components/CityHistoryList";
import CityForm from "./components/CityForm";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchWeather = (formData) => {
    const cityName = formData.city;

    setCurrentCity(cityName);
    if (!cityList.includes(cityName)) {
      setCityList([cityName, ...cityList]);
    }
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCurrentWeather(data));
  };

  const updateCurrentCity = (city) => {
    setCurrentCity(city);
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCurrentWeather(data));
  };

  const fetchInitialWeather = () => {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const errorCallback = () => console.log("You need to allow positioning");

    const successCallback = (data) => {
      console.log(data);
      const { latitude, longitude } = data.coords;

      const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;

      axios
        .get(url)
        .then((res) => res.data)
        .then((data) => {
          setCurrentWeather(data);
          setCurrentCity("your position");
        });
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  useEffect(() => {
    fetchInitialWeather();
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <CityForm onSubmit={fetchWeather} />
        <CityHistoryList
          cityList={cityList}
          currentCity={currentCity}
          updateCurrentCity={updateCurrentCity}
        />
        {currentWeather && (
          <CurrentWeather currentWeather={currentWeather} currentCity={currentCity} />
        )}
      </main>
    </div>
  );
}

export default App;
