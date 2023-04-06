import "../style/index.scss";
import { Slider } from "./Slider";

document.querySelector(".credit_number").onclick = async (e) => {
  await navigator.clipboard.writeText(e.target.innerText);
};
new Slider(data, (item) => `
  <div class="slider__card">
    <div>
      <img src="${item.img}">
    </div>
    <div class="title">${item.name}</div>
    <div class="secondary-btn">Learn more</div>
  </div>
`);
document.querySelector(".primary-btn").onclick = () => {
  popup.show("Lol");
}
