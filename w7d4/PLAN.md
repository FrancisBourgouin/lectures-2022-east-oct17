# Weather Magic!

Type your city in a form, get the current weather for that city. Optionnally, add a list of buttons for previously searched cities

# Data structures

## City

```jsx
const city = "";
```

## List of cities

```jsx
const cityList = ["", ""];
```

## Weather Data

API: 09fd719b4b698ec0260e424f83378e3d
ENDPOINT: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
Temp is in K
Description : {}.weather[0].description
Temperature : {}.main.temp
City Name : {}.name

```jsx
const weatherData = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - form
      - input name of city
      - button search
    - section
      - h1 previously searched cities
      - ul
        - li
          - button name of city
    - section
      - h1 name of city
      - p current temp
      - p weather condition

# Component Structure

- App
  - Header
  - CityNameSearch
  - CityHistoryList
    - CityHistoryListItem
  - CurrentWeather

# Component Data Structure

- App
  - Header
  - CityNameSearch
  - CityHistoryList
    - CityHistoryListItem
  - CurrentWeather
