const refs = {
    fontSizeInput: document.querySelector('#font-size-control'),
    textElement: document.querySelector('#text')
}











fontSizeControl.addEventListener('input', function () {
    var fontSize = fontSizeControl.value + 'px';
    textElement.style.fontSize = fontSize;
});