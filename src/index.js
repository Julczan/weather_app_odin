import "./styles.css";
import { currConditions } from "./processData";
import { displayData } from "./display";

const input = document.querySelector("#location");
const button = document.querySelector("#search");

button.addEventListener("click", () => {
  displayData();
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

export { getDataAndIcon };
