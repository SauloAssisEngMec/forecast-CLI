const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const apiKey = process.env.API_KEY;

module.exports = async (lat, lng) => {
  try {
    const response = await axios.get(
      "https://api.stormglass.io/v2/weather/point",
      {
        params: {
          lat: lat,
          lng: lng,
          params: "airTemperature,cloudCover",
          source: "sg",
        },
        headers: {
          Authorization: apiKey,
        },
      }
    );

    const weather = response.data.hours[0];
    return {
      temperature: weather.airTemperature.sg,
      condition: weather.cloudCover.sg,
    };
  } catch (error) {
    throw new Error("Unable to get weather data");
  }
  // const results = await axios({
  //   method: "get",
  //   url: "https://query.yahooapis.com/v1/public/yql",
  //   params: {
  //     format: "json",
  //     q: `select item from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}")`,
  //   },
  // });

  // return results.data.query.results.channel.item;
};
