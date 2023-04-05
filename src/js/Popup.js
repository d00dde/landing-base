export class Popup {
  constructor() {
    this.popup = document.querySelector(".popup");
    this.content = this.popup.querySelector(".popup__content");
    this.popup.onclick = (e) => {
      if(e.target.classList.contains("close")) {
        this.hide();
      }
    }
  }

  show(content = "") {
    console.dir(this.popup)
    this.content.innerHTML = content;
    this.popup.style.display = "flex";
  }

  hide() {
    this.content.innerHTML = "";
    this.popup.style.display = "none";
  }
}
