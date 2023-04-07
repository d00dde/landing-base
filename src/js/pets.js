import "../style/pets.scss";
import { Pagination } from "./Pagination";
import { data } from "./petsData";
import { petTemplates } from "./petTemplates";

// new Pagination(".pets-screen__pagination", data, petTemplates.card);
new Pagination(".pets-screen__pagination", new Array(48).fill("").map((_, i) => i), (i) => `<div>${i}</div>`);
