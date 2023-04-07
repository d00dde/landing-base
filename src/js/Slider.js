import { popup } from "./Popup";

export class Slider {
  constructor(data = [], itemCb, popupCb) {
    this.itemCb = itemCb;
    this.popupCb = popupCb;
    const slider = document.querySelector(".slider");
    const prevBtn = slider.querySelector(".prev-btn");
    const nextBtn = slider.querySelector(".next-btn");
    this.content = slider.querySelector(".slider__content");
    this.previous = data.slice(-1);
    this.active = data.slice(0, 3);
    this.next = data.slice(3, -1);
    this.render();
    // this.media();
    slider.onclick = (e) => {
      if(e.target.closest(".popIt")) {
        let id = e.target.closest(".popIt").dataset.id;
        const petInfo = this.active.find(item => item.name === id)
        popup.show(popupCb(petInfo));
      }
    }
    nextBtn.onclick = () => {
      this.previous.push(this.active.shift());
      this.active.push(this.next.shift());
      if(!this.next.length) {
        this.next.push(this.previous.shift());
      }
      this.render();
    }
    prevBtn.onclick = () => {
      this.next.unshift(this.active.pop());
      this.active.unshift(this.previous.pop());
      if(!this.previous.length) {
        this.previous.push(this.next.pop());
      }
      this.render();
    }
  }

  render() {
    this.content.innerHTML = this.active.map((item) => this.itemCb(item)).join("");
  }

  media() {
    window.matchMedia("(max-width: 1000px)").addEventListener("change",(e) => {
      if (e.matches) {
        this.next.unshift(this.active.pop());
      } else {
        this.active.push(this.next.shift());
      }
      this.render();
    });
  }
}
