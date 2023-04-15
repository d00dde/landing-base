import "../style/index.scss";
import { Slider } from "./Slider";
import { data } from "./petsData";
import { petTemplates } from "./petTemplates";
import {Menu} from "./Menu";

document.querySelector(".credit_number").onclick = async (e) => {
  await navigator.clipboard.writeText(e.target.innerText);
};

new Menu([
  { title: "About the shelter", href: "index.html", isActive: true },
  { title: "Our pets", href: "pets.html", isActive: false },
  { title: "Help the shelter", href: "#helpUs", isActive: false },
  { title: "Contacts", href: "#contacts", isActive: false },
], ".navbar")
new Slider(data, petTemplates);
