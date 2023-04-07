export class Menu {
  constructor(data, selector) {
    this.create(data, selector);
    this.menuBtn = document.querySelector(".navbar__mobile-icon");
    this.menuMobile = document.querySelector(".navbar__menu_mobile");
    this.shadow = document.querySelector(".shadow");
    this.menuBtn.onclick = this.show.bind(this);
    this.shadow.onclick = this.hide.bind(this);
    this.menuMobile.onclick = (e) => {
      if (e.target.classList.contains("navbar__item")) {
        this.hide();
      }
    }
  }

  create(data, selector) {
    document.querySelector(selector).innerHTML = `
      <div class="navbar__logo">
        <div class="title">Cozy House</div>
        <div class="slogan">Shelter for pets in Boston</div>
      </div>
      <div class="navbar__menu">
        ${data.map(({ href, title, isActive}) => `<a ${href ? `href="${href}"` : ""} class="navbar__item${isActive ? " active" : ""}">${title}</a>`).join("")}
      </div>
      <div class="shadow"></div>
      <div class="navbar__menu_mobile">
        ${data.map(({ href, title, isActive}) => `<a ${href ? `href="${href}"` : ""} class="navbar__item${isActive ? " active" : ""}">${title}</a>`).join("")}
      </div>
      <div class="navbar__mobile-icon">&#9776;</div>
    `;
  }

  show() {
    this.menuMobile.classList.add("visible");
    this.menuBtn.classList.add("active");
    this.shadow.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  hide() {
    this.menuMobile.classList.remove("visible");
    this.menuBtn.classList.remove("active");
    this.shadow.style.display = "none";
    document.body.style.overflow = "";
  }
}
