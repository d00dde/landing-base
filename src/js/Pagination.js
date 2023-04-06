export class Pagination {
  constructor(selector = "") {
    this.pagination = document.querySelector(selector);
    this.pagination.insertAdjacentHTML("beforeend", `
      <div class="popup close">
        <div class="popup__wrapper">
          <div class="circle-btn close">X</div>
          <div class="popup__content"></div>
        </div>
      </div>
    `);
    this.content = this.popup.querySelector(".popup__content");
    this.popup.onclick = (e) => {
      if(e.target.classList.contains("close")) {
        this.hide();
      }
    }
  }
}
