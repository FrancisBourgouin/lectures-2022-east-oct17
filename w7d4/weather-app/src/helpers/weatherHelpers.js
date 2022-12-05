import axios from "axios";
export const getCleanWeatherData = (rawData) => {
  //   Temp is in K
  // Description : {}.weather[0].description
  // Temperature : {}.main.temp
  // City Name : {}.name

  const description = rawData.weather[0].description;
  const temperature = Math.round(rawData.main.temp - 273.15);
  const cityName = rawData.name;

  return { description, temperature, cityName };
};

export const fetchWeatherData = (cityName) => {
  // API: 09fd719b4b698ec0260e424f83378e3d
  // ENDPOINT: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  const API = "09fd719b4b698ec0260e424f83378e3d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}`;

  return axios
    .get(url)
    .then((res) => res.data)
    .then((data) => getCleanWeatherData(data));
};
