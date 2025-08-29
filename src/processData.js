import { getWeatherData } from "./weatherAPI";

function changeToCels(temp) {
  return Math.round(((temp - 32) * 5) / 9);
}

async function currConditions(location) {
  const data = await getWeatherData(location);
  console.log(data);

  const address = data.address;
  const temp = data.currentConditions.temp;
  const icon = data.currentConditions.icon;
  const feelsLike = data.currentConditions.feelslike;
  const sunset = data.currentConditions.sunset;
  const windspeed = data.currentConditions.windspeed;

  const tempInCels = changeToCels(temp);
  const feelsLikeCels = changeToCels(feelsLike);

  return { address, icon, tempInCels, feelsLikeCels, windspeed, sunset };
}

async function dailyConditions(location) {
  const data = await getWeatherData(location);

  const daysArr = data.days;
  const dailyData = daysArr.map((day) => ({
    icon: day.icon,
    date: day.datetime,
    maxTemp: changeToCels(day.tempmax),
    minTemp: changeToCels(day.tempmin),
    windspeed: day.windspeed,
  }));

  return dailyData;
}

export { currConditions, dailyConditions };
