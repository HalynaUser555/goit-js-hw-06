
const fontSizeInput = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
fontSizeInput.addEventListener('input', changeSize)
function changeSize() {
    textElement.style.fontSize = fontSizeInput.value + 'px';
};
changeSize();


