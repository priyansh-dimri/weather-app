const createTemperatureData = (data) => {
  const temperatureData = document.createElement("div");
  temperatureData.className = "temperature-data";
  temperatureData.textContent = data;
  return temperatureData;
};

const convertDate = (date) => {
  let inputDate = new Date(date);

  return `${inputDate.getDate()}/${inputDate.getMonth()}`;
};

const createWeatherForecastDay = (date, temp) => {
  const weatherForecastDay = document.createElement("div");
  weatherForecastDay.className = "weather-forecast-day";

  const weatherForecastTemp = document.createElement("div");
  weatherForecastTemp.className = "weather-forecast-temperature";
  weatherForecastTemp.textContent = temp;

  const weatherForecastDate = document.createElement("div");
  weatherForecastDate.className = "weather-forecast-date";
  weatherForecastDate.textContent = convertDate(date);

  weatherForecastDay.append(weatherForecastTemp, weatherForecastDate);
  return weatherForecastDay;
};

const populateMain = (weatherData, gifURL, forecastData) => {
  const weatherConditionContainer = document.querySelector(
    ".weather-condition-container"
  );

  const weatherConditionContentContainer = document.createElement("div");
  weatherConditionContentContainer.className =
    "weather-condition-content-container";

  const weatherCondition = document.createElement("div");
  weatherCondition.id = "weather-condition";
  weatherCondition.textContent = weatherData.conditions;

  const weatherConditionDescription = document.createElement("div");
  weatherConditionDescription.id = "weather-condition-description";
  weatherConditionDescription.textContent = weatherData.description;

  weatherConditionContentContainer.append(
    weatherCondition,
    weatherConditionDescription
  );

  const weatherConditionGIF = document.createElement("img");
  weatherConditionGIF.id = "weather-condition-gif";
  weatherConditionGIF.alt = "Weather GIF";
  weatherConditionGIF.src = gifURL;

  weatherConditionContainer.replaceChildren(
    weatherConditionContentContainer,
    weatherConditionGIF
  );

  const fullAddress = document.getElementById("full-address");
  fullAddress.textContent = weatherData.fullAddress;

  const weatherForecastContainer = document.querySelector(
    ".weather-forecast-container"
  );
  weatherForecastContainer.replaceChildren();


  for (let weatherDayData of forecastData) {
    weatherForecastContainer.appendChild(
      createWeatherForecastDay(
        weatherDayData.datetime,
        weatherDayData.temperature
      )
    );
  }
};

const renderWeather = (completeWeatherData) => {
  const weatherData = completeWeatherData.currentConditions;
  const gifURL = completeWeatherData.gifURL;
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

  populateMain(weatherData, gifURL, completeWeatherData.days);
};

export default renderWeather;
