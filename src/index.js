import "./styles.css";
import { currConditions, dailyConditions } from "./processData";
import { displayTodayData } from "./display";

const input = document.querySelector("#location");
const button = document.querySelector("#search");

button.addEventListener("click", () => {
  displayTodayData();
  getDailyData();
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

async function getDailyData() {
  const inputValue = capitalizeInput(input.value);
  const dailyData = await dailyConditions(inputValue);
  console.log(dailyData);
}

export { getDataAndIcon };
