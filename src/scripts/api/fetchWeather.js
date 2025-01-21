import { visualCrossingConfig } from "./apiConfig";
import parseWeatherData from "./parseData";
import fetchWeatherGIF from "./fetchGif";

const fetchWeatherData = async (location) => {
  try {
    const weatherData = await fetch(
      `${visualCrossingConfig.baseURL}/${location}?unitGroup=${visualCrossingConfig.unitGroup}&include=${visualCrossingConfig.includeSections}&key=${visualCrossingConfig.apiKey}&contentType=${visualCrossingConfig.contentType}`
    );
    const weatherDataJSON = await weatherData.json();
    const parsedWeatherData = parseWeatherData(weatherDataJSON);
    const currentCondition = parsedWeatherData.currentConditions.conditions;
    const gifURL = await fetchWeatherGIF(`${currentCondition} weather`);
    parsedWeatherData.gifURL = gifURL;
    return parsedWeatherData;
  } catch (e) {
    console.log(e);
  }
};

export default fetchWeatherData;