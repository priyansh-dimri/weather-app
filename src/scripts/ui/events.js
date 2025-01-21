import fetchWeatherData from "../api/fetchWeather";
import renderWeather from "./renderWeather";

const initializeEvents = () => {
  const searchBtn = document.getElementById("search");
  searchBtn.addEventListener("click", async () => {
    const locationInput = document.getElementById("location");
    const location = locationInput.value;
    if (!location) return;
    const weatherData = await fetchWeatherData(location);
    console.log(weatherData);
    renderWeather(weatherData.currentConditions);
  });
};

export default initializeEvents;