import "../style/index.scss";
import { Slider } from "./Slider";
import { data } from "./petsData";
import { petTemplates } from "./petTemplates";

document.querySelector(".credit_number").onclick = async (e) => {
  await navigator.clipboard.writeText(e.target.innerText);
};
new Slider(data, petTemplates.card, petTemplates.popup);
