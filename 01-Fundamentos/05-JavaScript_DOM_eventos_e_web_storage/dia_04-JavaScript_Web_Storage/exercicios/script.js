window.onload = function () {
  function loadOptions() {
    if (typeof Storage != "undefined") {
      if (localStorage.bgColor !== undefined) {
        let page = document.querySelector(".text-section");
        page.style.backgroundColor = localStorage.bgColor;
      }
    } else {
      document.write("Navagador sem suporte a Storage");
    }
  }

  loadOptions();

  function storeOptions() {
    let page = document.querySelector(".text-section");
    let pageBgColor = window.getComputedStyle(page).backgroundColor;
    localStorage.bgColor = pageBgColor;
  }

  function changeBGColor(event) {
    let color = window.getComputedStyle(event.target).backgroundColor;
    let page = document.querySelector(".text-section");
    page.style.backgroundColor = color;
    storeOptions();
  }

  let bgColorBlack = document.querySelector(".backgroundColor-selector.black");
  let bgColorWhite = document.querySelector(".backgroundColor-selector.white");
  let bgColorBeige = document.querySelector(".backgroundColor-selector.beige");

  bgColorBlack.addEventListener("click", changeBGColor);
  bgColorWhite.addEventListener("click", changeBGColor);
  bgColorBeige.addEventListener("click", changeBGColor);
};
