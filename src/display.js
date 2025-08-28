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

function createNav() {}

async function displayDailyData() {
  const data = await getDailyDataAndIcon();

  const display = document.querySelector(".display");
  const container = document.createElement("div");
  container.className = "daily-container";
  display.textContent = "";

  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    const icon = document.createElement("img");
    const temp = document.createElement("div");
    const date = document.createElement("div");

    card.className = "card";

    date.textContent = data[i].date;
    temp.textContent = data[i].temp + "°C";
    icon.src = data[i].iconSrc;

    card.appendChild(date);
    card.appendChild(icon);
    card.appendChild(temp);
    container.appendChild(card);
  }

  display.appendChild(container);
}

export { displayTodayData, displayDailyData };
