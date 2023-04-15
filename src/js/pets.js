import "../style/pets.scss";
import { Pagination } from "./Pagination";
import { data } from "./petsData";
import { petTemplates } from "./petTemplates";
import {Menu} from "./Menu";

function getRandomIndexes(to = 0) {
  return new Array(to).fill("")
    .map((_, idx) => ({ idx, pos: Math.random() }))
    .sort((a, b) => a.pos - b.pos)
    .map((item) => item.idx);
}

let generate = [];

for (let i = 0; i < 6; i++) {
  generate = generate.concat(getRandomIndexes(data.length).map((idx) => data[idx]));
}

new Menu([
  { title: "About the shelter", href: "index.html", isActive: false },
  { title: "Our pets", href: "pets.html", isActive: true },
  { title: "Help the shelter", href: "index.html#helpUs", isActive: false },
  { title: "Contacts", href: "index.html#contacts", isActive: false },
], ".navbar")

window.addEventListener("load", () => {
  new Pagination(".pets-screen__pagination", generate, petTemplates);
})

