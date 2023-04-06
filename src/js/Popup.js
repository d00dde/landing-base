class Popup {
  constructor() {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="popup close">
        <div class="popup__wrapper">
          <div class="circle-btn close">X</div>
          <div class="popup__content"></div>
        </div>
      </div>
    `);
    this.popup = document.querySelector(".popup");
    this.content = this.popup.querySelector(".popup__content");
    this.popup.onclick = (e) => {
      if(e.target.classList.contains("close")) {
        this.hide();
      }
    }
  }

  show(content = "") {
    this.content.innerHTML = content;
    this.popup.style.display = "flex";
  }

  hide() {
    this.content.innerHTML = "";
    this.popup.style.display = "none";
  }
}

export const popup = new Popup();