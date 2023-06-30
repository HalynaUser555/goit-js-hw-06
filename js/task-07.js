
const fontSizeInput = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
fontSizeInput.addEventListener('input', function () {
    const fontSize = fontSizeInput.value + 'px';
    textElement.style.fontSize = fontSize;
});



