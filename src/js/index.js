import "../style/main.scss";
import { Slider } from "./Slider";
import { Popup } from "./Popup";

const popup = new Popup();
new Slider([1, 2, 3, 4, 5, 6, 7, 8], (item) => `<div class="slider__card">${item}</div>`);
document.querySelector(".primary-btn").onclick = () => {
  popup.show("Lol");
}
