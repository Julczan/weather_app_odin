import { getWeatherData } from "./weatherAPI";

async function currConditions(location) {
  const data = await getWeatherData(location);
  const address = data.address;
  const time = data.currentConditions.datetime;
  const temp = data.currentConditions.temp;
  const icon = data.currentConditions.icon;
  const feelsLike = data.currentConditions.feelslike;
  const sunset = data.currentConditions.sunset;
  const windspeed = data.currentConditions.windspeed;

  const tempInCels = Math.round((temp - 32) / (9 / 5));
  const feelsLikeCels = Math.round((feelsLike - 32) / (9 / 5));

  return { address, time, icon, tempInCels, feelsLikeCels, windspeed, sunset };
}

async function dailyConditions(location) {
  const data = await getWeatherData(location);
  const daysArr = data.days;
  const dailyData = daysArr.map((day) => ({
    icon: day.icon,
    date: day.datetime,
    temp: day.temp,
  }));
  return { dailyData };
}

export { currConditions, dailyConditions };
