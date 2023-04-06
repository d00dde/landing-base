import "../style/index.scss";
import { Slider } from "./Slider";
import { data } from "./petsData";

document.querySelector(".credit_number").onclick = async (e) => {
  await navigator.clipboard.writeText(e.target.innerText);
};
new Slider(data, (item) => `
  <div class="pet-card popIt" data-id="${item.name}">
    <div class="popIt">
      <img class="popIt" src="${item.img}">
    </div>
    <div class="title popIt">${item.name}</div>
    <button class="secondary-btn popIt">Learn more</button>
  </div>
`);
