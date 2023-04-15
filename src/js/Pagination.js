import { popup } from "./Popup";

export class Pagination {
  constructor(selector = "", data = [], templates) {
    this.data = data;
    this.templates = templates;
    this.currentPage = 1;
    this.pageLimit = this.calculateStartPageLimit();
    this.pagesCount = Math.ceil(this.data.length/this.pageLimit);
    this.pagination = document.querySelector(selector);
    this.create();
    this.content = this.pagination.querySelector(".pagination__content");
    this.first = this.pagination.querySelector(".first");
    this.previous = this.pagination.querySelector(".previous");
    this.current = this.pagination.querySelector(".current");
    this.next = this.pagination.querySelector(".next");
    this.last = this.pagination.querySelector(".last");
    this.first.onclick = (e) => this.backward(e, true);
    this.previous.onclick = (e) => this.backward(e);
    this.next.onclick = (e) => this.forward(e);
    this.last.onclick = (e) => this.forward(e, true);
    this.media();
    this.render();
    this.content.onclick = (e) => {
      if(e.target.closest(".popIt")) {
        let id = e.target.closest(".popIt").dataset.id;
        const petInfo = this.data.find(item => item.name === id)
        popup.show(templates.popup(petInfo));
      }
    }
  }

  create() {
    this.pagination.insertAdjacentHTML("beforeend", `
        <div class="pagination__content"></div>
        <div class="pagination__controls">
          <button class="first circle-btn"><<</button>
          <button class="previous circle-btn"><</button>
          <button class="current circle-btn"></button>
          <button class="next circle-btn">></button>
          <button class="last circle-btn">>></button>
        </div>
    `);
  }

  render() {
    const begin = (this.currentPage - 1) * this.pageLimit;
    const end = Math.min(begin + this.pageLimit, this.data.length);
    this.content.innerHTML = this.data.slice(begin, end).map((item) => this.templates.card(item)).join("");
    this.current.innerText = this.currentPage;
    if(this.currentPage === 1) {
      this.first.setAttribute("disabled", "");
      this.previous.setAttribute("disabled", "");
    }
    else {
      this.first.removeAttribute("disabled");
      this.previous.removeAttribute("disabled");
    }
    if(this.currentPage === this.pagesCount) {
      this.next.setAttribute("disabled", "");
      this.last.setAttribute("disabled", "");
    }
    else {
      this.next.removeAttribute("disabled");
      this.last.removeAttribute("disabled");
    }
  }

  forward(e, toEnd = false) {
    if(e.target.getAttribute("disabled")) return;
    if(toEnd) {
      this.currentPage = this.pagesCount;
    }
    else {
      this.currentPage++;
    }
    this.render();
  }

  backward(e, toBegin = false) {
    if(e.target.getAttribute("disabled")) return;
    if(toBegin) {
      this.currentPage = 1;
    }
    else {
      this.currentPage--;
    }
    this.render();
  }

  media() {
    window.matchMedia("(max-width: 769px)").addEventListener("change",(e) => {
      if (e.matches) {
        this.pageLimit = 6;
        this.pagesCount = Math.ceil(this.data.length/this.pageLimit);
      } else {
        this.pageLimit = 8;
        this.pagesCount = Math.ceil(this.data.length/this.pageLimit);
        if (this.currentPage > this.pagesCount) {
          this.currentPage = this.pagesCount;
        }
      }
      this.render();
    });
    window.matchMedia("(max-width: 321px)").addEventListener("change",(e) => {
      if (e.matches) {
        this.pageLimit = 3;
        this.pagesCount = Math.ceil(this.data.length/this.pageLimit);
      } else {
        this.pageLimit = 6;
        this.pagesCount = Math.ceil(this.data.length/this.pageLimit);
        if (this.currentPage > this.pagesCount) {
          this.currentPage = this.pagesCount;
        }
      }
      this.render();
    });
  }

  calculateStartPageLimit() {
    const screenWidth = parseInt(getComputedStyle(document.querySelector('body')).width);
    if (screenWidth > 769) return 8;
    if (screenWidth > 321) return 6;
    return 3;
  }
}
