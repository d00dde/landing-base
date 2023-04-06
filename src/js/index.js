import "../style/index.scss";
import { Slider } from "./Slider";

new Slider([1, 2, 3, 4, 5, 6, 7, 8], (item) => `<div class="slider__card">${item}</div>`);


document.querySelector(".credit_number").onclick = async (e) => {
  await navigator.clipboard.writeText(e.target.innerText);
};
