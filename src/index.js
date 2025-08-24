import "./styles.css";
import { currConditions } from "./processData";

import sunnyImage from "./assets/SVG/1st Set - Color/clear-day.svg";

const input = document.querySelector("#location");
const button = document.querySelector("#search");

button.addEventListener("click", () => {
  const currData = currConditions(input.value);

  currData.then((result) => console.log(result));
});
