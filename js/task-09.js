const body = document.querySelector('body');
console.dir(body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elementBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

elementBtn.addEventListener('click', changeColor);
function changeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}