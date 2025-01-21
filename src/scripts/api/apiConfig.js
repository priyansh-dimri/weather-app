// Configuration for Visual Crossing API
const visualCrossingConfig = {
  baseURL:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
  unitGroup: "metric",
  includeSections: "days%2Ccurrent",
  contentType: "json",
  apiKey: "FXGR3D5XPSCLPKKDTURNKRECL",
};

// Configuration for Giphy API
const giphyConfig = {
  baseURL: "https://api.giphy.com/v1/stickers/translate",
  weirdness: "1",
  apiKey: "8hl9uspUYadMWZt1fJOts5XroBzHa2yx",
};

export { visualCrossingConfig, giphyConfig };
