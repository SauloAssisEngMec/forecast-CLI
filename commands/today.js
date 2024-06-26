const getWeather = require("../utils/weather");
const dotenv = require("dotenv");
dotenv.config();

module.exports = async (args) => {
  const ora = (await import("ora")).default;
  const spinner = ora().start();

  try {
    const lat = args.latitude || args.lat;
    const lng = args.longitude || args.lng;
    const weather = await getWeather(lat, lng);

    spinner.stop();

    console.log(
      `\tcurrent forecast in latitude: ${lat} and longitude:${lng}\n`
    );
    console.log(
      `\t temperature:${weather.temperature} condition:${weather.condition}`
    );
  } catch (e) {
    spinner.stop;
    console.log(e.message);
  }
};
