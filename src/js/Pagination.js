export class Pagination {
  constructor(selector = "", data = [], itemCb) {
    this.data = data;
    this.itemCb = itemCb;
    this.currentPage = 1;
    this.pageLimit = 8;
    this.begin = 0;
    this.end = this.pageLimit;
    this.pagination = document.querySelector(selector);
    this.create();
    this.content = this.pagination.querySelector(".pagination__content");
    this.first = this.pagination.querySelector(".first");
    this.previous = this.pagination.querySelector(".previous");
    this.current = this.pagination.querySelector(".current");
    this.next = this.pagination.querySelector(".next");
    this.last = this.pagination.querySelector(".last");
    this.first.onclick = (e) => this.backward(e,true);
    this.previous.onclick = (e) => this.backward(e);
    this.next.onclick = (e) => this.forward(e);
    this.last.onclick = (e) => this.forward(e,true);
    this.render();
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
    this.content.innerHTML = this.data.slice(this.begin, this.end).map((item) => this.itemCb(item)).join("");
    this.current.innerText = this.currentPage;
    if(this.begin === 0) {
      this.first.setAttribute("disabled", "");
      this.previous.setAttribute("disabled", "");
    }
    else {
      this.first.removeAttribute("disabled");
      this.previous.removeAttribute("disabled");
    }
    if(this.end + this.pageLimit >= this.data.length) {
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
    this.begin += pageLimit
    console.log("forward!!");
    this.render();
  }

  backward(e, toBegin = false) {
    if(e.target.getAttribute("disabled")) return;
    console.log("backward!!");
    this.render();
  }
}
