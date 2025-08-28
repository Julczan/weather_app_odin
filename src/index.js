import "./styles.css";
import { currConditions, dailyConditions } from "./processData";
import { displayDailyData, displayTodayData } from "./display";

const input = document.querySelector("#location");
const button = document.querySelector("#search");

button.addEventListener("click", () => {
  // displayTodayData();
  displayDailyData();
});
displayDailyData();

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
    const temp = data[i].temp;
    const conditions = data[i].icon;
    const date = data[i].date;
    const icon = await import(
      `./assets/PNG/2nd Set - Color/${data[i].icon}.png`
    );
    const iconSrc = icon.default;
    const dataObj = { temp, conditions, date, iconSrc };
    dailyData.push(dataObj);
  }
  return dailyData;
}

export { getDataAndIcon, getDailyDataAndIcon };
