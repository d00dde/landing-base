class Popup {
  constructor() {
    this.create();
    this.popup = document.querySelector(".popup");
    this.content = this.popup.querySelector(".popup__content");
    this.popup.onclick = (e) => {
      if(e.target.classList.contains("close")) {
        this.hide();
      }
    }
  }

  create() {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="popup close">
        <div class="popup__wrapper">
          <div class="circle-btn close">+</div>
          <div class="popup__content"></div>
        </div>
      </div>
    `);
  }

  show(content = "") {
    this.content.innerHTML = content;
    this.popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  hide() {
    this.content.innerHTML = "";
    this.popup.style.display = "none";
    document.body.style.overflow = "";
  }
}

export const popup = new Popup();
