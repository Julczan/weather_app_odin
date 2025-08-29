import "./styles.css";
import { currConditions, dailyConditions } from "./processData";
import { displayDailyData, displayTodayData } from "./display";

const input = document.querySelector("#location");
const button = document.querySelector("#search");
const todayBtn = document.querySelector("#today");
const dailyBtn = document.querySelector("#daily");

todayBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Specify the location");
  } else {
    displayTodayData();
  }
});

dailyBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Specify the location");
  } else {
    displayDailyData();
  }
});

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Specify the location");
  } else {
    displayTodayData();
  }
});

function capitalizeInput(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

async function getDataAndIcon() {
  const inputValue = capitalizeInput(input.value);
  const currData = await currConditions(inputValue);
  let currIcon = currData.icon;
  const icon = await import(`./assets/PNG/2nd Set - Color/${currIcon}.png`);
  const iconSrc = icon.default;

  return { currData, iconSrc };
}

async function getDailyDataAndIcon() {
  const inputValue = capitalizeInput(input.value);
  const data = await dailyConditions(inputValue);

  const dailyData = [];

  for (let i = 0; i < data.length; i++) {
    const maxTemp = data[i].maxTemp;
    const minTemp = data[i].minTemp;
    const windspeed = data[i].windspeed;
    const date = data[i].date;
    const icon = await import(
      `./assets/PNG/2nd Set - Color/${data[i].icon}.png`
    );
    const iconSrc = icon.default;
    const dataObj = { maxTemp, minTemp, date, iconSrc, windspeed };
    dailyData.push(dataObj);
  }

  return dailyData;
}

export { getDataAndIcon, getDailyDataAndIcon };
