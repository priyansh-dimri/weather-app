const getWeeklyForecast = (daysForecast) => {
  let weeklyForecast = [];

  for (let day = 1; day <= 6; ++day) {
    weeklyForecast.push({
      datetime: daysForecast[day].datetime,
      temperature: daysForecast[day].temp,
    });
  }

  return weeklyForecast;
};

const parseWeatherData = (weatherDataJSON) => {
  return {
    address: weatherDataJSON.address,
    fullAddress: weatherDataJSON.resolvedAddress,
    currentConditions: {
      temperature: weatherDataJSON.currentConditions.temp,
      feelsLike: weatherDataJSON.currentConditions.feelslike,
      visibility: weatherDataJSON.currentConditions.visibility,
      precipitation: weatherDataJSON.currentConditions.precip,
      snow: weatherDataJSON.currentConditions.snow,
      windSpeed: weatherDataJSON.currentConditions.windspeed,
      windDir: weatherDataJSON.currentConditions.winddir,
      pressure: weatherDataJSON.currentConditions.pressure,
      sunrise: weatherDataJSON.currentConditions.sunrise,
      sunset: weatherDataJSON.currentConditions.sunset,
      conditions: weatherDataJSON.currentConditions.conditions,
      description: weatherDataJSON.days[0].description,
    },
    days: getWeeklyForecast(weatherDataJSON.days),
  };
};

export default parseWeatherData;