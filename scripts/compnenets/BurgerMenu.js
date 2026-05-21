class BurgerMenu {
  selectors = {
    root: "[data-js-header]",
    menu: "[data-js-header-menu]",
    burgerMenu: "[data-js-header-burger-button]"
  }

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock"
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.menuElement = this.rootElement.querySelector(this.selectors.menu);
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerMenu);
    this.init();
  }

  onClickMenu(e) {
    if(e.target.closest("a")) {
      this.burgerButtonElement.classList.remove(this.stateClasses.isActive);
      this.menuElement.classList.remove(this.stateClasses.isActive);
      document.documentElement.classList.remove(this.stateClasses.isLock);
    }
  }

  onClickBurgerButton = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.menuElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  }

  init() {
    this.burgerButtonElement.addEventListener("click", this.onClickBurgerButton);
    this.menuElement.addEventListener("click", (e) => this.onClickMenu(e))
  }
}

export default BurgerMenu;