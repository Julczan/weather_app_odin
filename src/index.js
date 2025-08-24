import "./styles.css";
import { currConditions } from "./processData";

const input = document.querySelector("#location");
const button = document.querySelector("#search");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  getIconForData();
});

async function getIconForData() {
  const currData = await currConditions(input.value);
  let currIcon = currData.icon;
  const icon = await import(`./assets/PNG/2nd Set - Color/${currIcon}.png`);
  const iconSrc = icon.default;
  const image = document.createElement("img");

  image.src = iconSrc;

  container.appendChild(image);
}
