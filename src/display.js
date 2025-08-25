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

  container.textContent = "";

  const data = await getDataAndIcon();

  address.textContent = data.currData.address;
  icon.src = data.iconSrc;
  temp.textContent = data.currData.tempInCels;
  feelslike.textContent = data.currData.feelsLikeCels;
  wind.textContent = data.currData.windspeed;
  time.textContent = data.currData.time;
  sunset.textContent = data.currData.sunset;

  container.appendChild(address);
  container.appendChild(icon);
  container.appendChild(temp);
  container.appendChild(feelslike);
  container.appendChild(wind);
  container.appendChild(time);
  container.appendChild(sunset);
}

export { displayData };
