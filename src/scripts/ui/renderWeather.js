const createTemperatureData = (data) => {
  const temperatureData = document.createElement("div");
  temperatureData.className = "temperature-data";
  temperatureData.textContent = data;
  return temperatureData;
};

const renderWeather = (weatherData) => {
  const currentData = document.getElementById("current-data");

  const currentTemperature = document.createElement("div");
  currentTemperature.id = "current-temperature";
  currentTemperature.textContent = weatherData.temperature + "°C";

  const feelsLike = document.createElement("div");
  feelsLike.className = "feels-like";
  feelsLike.textContent = `Feels like ${weatherData.feelsLike}°C`;

  const otherData = document.createElement("div");
  otherData.id = "other-data";

  otherData.appendChild(
    createTemperatureData(`Visibility: ${weatherData.visibility}`)
  );
  if (weatherData.precipitation) {
    otherData.appendChild(
      createTemperatureData(`Precipitation: ${weatherData.precipitation}`)
    );
  }
  otherData.appendChild(
    createTemperatureData(`Sunrise: ${weatherData.sunrise}`)
  );
  otherData.appendChild(createTemperatureData(`Sunset: ${weatherData.sunset}`));
  otherData.appendChild(createTemperatureData(`Snow: ${weatherData.snow}`));
  otherData.appendChild(
    createTemperatureData(`Wind Speed(in km/h): ${weatherData.windSpeed}`)
  );
  otherData.appendChild(
    createTemperatureData(`Pressure(in mb): ${weatherData.pressure}`)
  );

  currentData.replaceChildren(currentTemperature, feelsLike, otherData);
};

export default renderWeather;
