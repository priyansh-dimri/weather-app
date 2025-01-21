import { giphyConfig } from "./apiConfig";

const fetchWeatherGIF = async (weather) => {
  try {
    const gifData = await fetch(
      `${giphyConfig.baseURL}?apiKey=${giphyConfig.apiKey}&s=${weather}&weirdness=${giphyConfig.weirdness}`
    );
    const gifDataJSON = await gifData.json();
    const gifURL = gifDataJSON.data.images.original.url;
    return gifURL;
  } catch (e) {
    console.log(e);
  }
};

export default fetchWeatherGIF;