import { getDataAndIcon, getDailyDataAndIcon } from ".";

async function displayTodayData() {
  const data = await getDataAndIcon();

  const display = document.querySelector(".display");
  const container = document.createElement("div");
  const address = document.createElement("div");
  const icon = document.createElement("img");
  const temp = document.createElement("div");
  const feelslike = document.createElement("div");
  const wind = document.createElement("div");
  const sunset = document.createElement("div");

  container.className = "container";
  address.className = "address";
  icon.className = "icon";
  temp.className = "temp";
  feelslike.className = "text";
  wind.className = "text";
  sunset.className = "text";

  display.textContent = "";

  address.textContent = data.currData.address;
  icon.src = data.iconSrc;
  temp.textContent = data.currData.tempInCels + "°C";
  feelslike.textContent = "Feels like " + data.currData.feelsLikeCels + "°C";
  wind.textContent = "Wind speed: " + data.currData.windspeed + " km/h";
  sunset.textContent = "Sunset at " + data.currData.sunset;

  container.appendChild(address);
  container.appendChild(icon);
  container.appendChild(temp);
  container.appendChild(feelslike);
  container.appendChild(wind);
  container.appendChild(sunset);
  display.appendChild(container);
}

async function displayDailyData() {
  const data = await getDailyDataAndIcon();

  const display = document.querySelector(".display");
  const container = document.createElement("div");
  const table = document.createElement("div");
  const dateText = document.createElement("div");
  const weatherText = document.createElement("div");
  const maxTempText = document.createElement("div");
  const minTempText = document.createElement("div");
  const windText = document.createElement("div");

  dateText.textContent = "Date";
  weatherText.textContent = "Weather";
  maxTempText.textContent = "Max Temp";
  minTempText.textContent = "Min Temp";
  windText.textContent = "Wind";
  container.className = "daily-container";
  table.className = "table";

  display.textContent = "";

  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    const icon = document.createElement("img");
    const maxTemp = document.createElement("div");
    const minTemp = document.createElement("div");
    const date = document.createElement("div");
    const windspeed = document.createElement("div");

    card.className = "card";

    date.textContent = data[i].date;
    maxTemp.textContent = data[i].maxTemp + "°C";
    minTemp.textContent = data[i].minTemp + "°C";
    icon.src = data[i].iconSrc;
    windspeed.textContent = data[i].windspeed + " km/h";

    card.appendChild(date);
    card.appendChild(icon);
    card.appendChild(maxTemp);
    card.appendChild(minTemp);
    card.appendChild(windspeed);
    container.appendChild(card);
  }

  table.appendChild(dateText);
  table.appendChild(weatherText);
  table.appendChild(maxTempText);
  table.appendChild(minTempText);
  table.appendChild(windText);
  display.appendChild(table);
  display.appendChild(container);
}

export { displayTodayData, displayDailyData };
