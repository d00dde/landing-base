import "../style/pets.scss";
import { Pagination } from "./Pagination";
import { data } from "./petsData";
import { petTemplates } from "./petTemplates";

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

new Pagination(".pets-screen__pagination", generate, petTemplates);
