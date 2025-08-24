import { getWeatherData } from "./weatherAPI";

async function currConditions() {
  const data = await getWeatherData("Kraków");
  const temp = data.currentConditions.temp;
  const icon = data.currentConditions.icon;
  const feelsLike = data.currentConditions.feelslike;
  const sunset = data.currentConditions.sunset;
  const windspeed = data.currentConditions.windspeed;

  const tempInCels = Math.round((temp - 32) / (9 / 5));
  const feelsLikeCels = Math.round((feelsLike - 32) / (9 / 5));

  return { icon, tempInCels, feelsLikeCels, windspeed, sunset };
}

export { currConditions };
