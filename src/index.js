// Day and Hour
let h2 = document.querySelector("h2");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

if (hour < 10) {
  hour = `0${hour}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day} ${hour}:${minutes}`;

// Search Bar
function searchCity(event) {
  event.preventDefault();

  let key = `dd09922bof9dfbd100daf3a044cat44d`;
  let unit = `metric`;

  let city = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city.value}`;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${key}&units=${unit}`;

  axios.get(apiUrl).then(showForecast);
}

let search = document.querySelector("#search-bar");
search.addEventListener("submit", searchCity);

function showF() {
  let temperatureF = document.querySelector(".temperature");
  temperatureF.innerHTML = "60";
}
let fahrenheit = document.querySelector(".fahrenheit");
fahrenheit.addEventListener("click", showF);

function showCelsius() {
  let temperatureC = document.querySelector(".temperature");
  temperatureC.innerHTML = "16";
}
let celsius = document.querySelector(".celsius");
celsius.addEventListener("click", showCelsius);

function showForecast(response) {
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = Math.round(response.data.temperature.current);
}
