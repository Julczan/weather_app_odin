import { getDataAndIcon } from ".";

async function displayData() {
  const container = document.querySelector(".container");
  const address = document.createElement("div");
  const icon = document.createElement("img");
  const temp = document.createElement("div");
  const feelslike = document.createElement("div");
  const wind = document.createElement("div");
  const time = document.createElement("div");
  const sunset = document.createElement("div");

  address.className = "address";
  icon.className = "icon";
  temp.className = "temp";
  feelslike.className = "text";
  wind.className = "text";
  time.className = "text";
  sunset.className = "text";

  container.textContent = "";

  const data = await getDataAndIcon();

  address.textContent = data.currData.address;
  icon.src = data.iconSrc;
  temp.textContent = data.currData.tempInCels + "°C";
  feelslike.textContent = "Feels like " + data.currData.feelsLikeCels + "°C";
  wind.textContent = "Wind speed: " + data.currData.windspeed + " km/h";
  time.textContent = "Current time: " + data.currData.time;
  sunset.textContent = "Sunset at " + data.currData.sunset;

  container.appendChild(address);
  container.appendChild(icon);
  container.appendChild(temp);
  container.appendChild(feelslike);
  container.appendChild(wind);
  container.appendChild(time);
  container.appendChild(sunset);
}

export { displayData };
