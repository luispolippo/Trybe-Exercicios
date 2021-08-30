const page = document.querySelector('.text-section');
const bgColorBlack = document.querySelector('.background.black');
const bgColorWhite = document.querySelector('.background.white');
const bgColorBeige = document.querySelector('.background.beige');
const lineSpaceInput = document.getElementById('line-space-input');
const fontColorBlack = document.querySelector('.font.black');
const fontColorWhite = document.querySelector('.font.white');
const fontColorRed = document.querySelector('.font.red');
const fontSizeInput = document.getElementById('font-size-input');
const fontFamily = document.getElementById('font-selection');

window.onload = function () {
  loadOptions();

  bgColorBlack.addEventListener('click', changeBGColor);
  bgColorWhite.addEventListener('click', changeBGColor);
  bgColorBeige.addEventListener('click', changeBGColor);

  fontColorBlack.addEventListener('click', changeFontColor);
  fontColorWhite.addEventListener('click', changeFontColor);
  fontColorRed.addEventListener('click', changeFontColor);

  lineSpaceInput.addEventListener('change', changeLineSpace);

  fontSizeInput.addEventListener('change', changeFontSize);

  fontFamily.addEventListener('change', changeFontFamily);
};

function loadOptions() {
  if (typeof Storage != 'undefined') {
    if (localStorage.bgColor !== undefined) {
      page.style.backgroundColor = localStorage.bgColor;
      page.style.lineHeight = localStorage.lineHeight;
      lineSpaceInput.value = parseInt(localStorage.lineHeight, 10);
      page.style.color = localStorage.color;
      page.style.fontSize = localStorage.fontSize;
      fontSizeInput.value = parseInt(localStorage.fontSize);
      page.style.fontFamily = localStorage.fontFamily;
      for (let i = 0; i < fontFamily.length; i += 1) {
        const optionValue = fontFamily.options[i].value;
        if (optionValue === localStorage.fontFamily) {
          fontFamily.selectedIndex = i;
        }
      }

    }
  } else {
    document.write('Navagador sem suporte a Storage');
  }
}

function storeOptions() {
  const pageBgColor = window.getComputedStyle(page).backgroundColor;
  const pageLineHeight = window.getComputedStyle(page).lineHeight;
  const pageFontColor = window.getComputedStyle(page).color;
  const pageFontSize = window.getComputedStyle(page).fontSize;
  const pageFontFamily = window.getComputedStyle(page).fontFamily;
  const selectIndex = fontFamily.selectedIndex;

  localStorage.bgColor = pageBgColor;
  localStorage.lineHeight = pageLineHeight;
  localStorage.color = pageFontColor;
  localStorage.fontSize = pageFontSize;
  localStorage.fontFamily = pageFontFamily;
  localStorage.selectIndex = selectIndex;
}

function changeBGColor(event) {
  const color = window.getComputedStyle(event.target).backgroundColor;
  page.style.backgroundColor = color;
  storeOptions();
}

function changeFontColor(event) {
  const color = window.getComputedStyle(event.target).backgroundColor;
  page.style.color = color;
  storeOptions();
}

function changeLineSpace(event) {
  const lineHeight = event.target;
  if (lineHeight.value < 18) {
    lineHeight.value = 18;
  }
  page.style.lineHeight = lineHeight.value + 'px';
  storeOptions();
}

function changeFontSize(event) {
  const fontSize = event.target;
  if(fontSize.value < 12) {
    fontSize.value = 12;
  }
  page.style.fontSize = fontSize.value + 'px';
  storeOptions();
}

function changeFontFamily(event) {
  const selectedFontFamily = event.target.value;
  page.style.fontFamily = selectedFontFamily;
  storeOptions();
}