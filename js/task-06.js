const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', validateInput);
const inputLength = Number(inputEl.dataset.length);

console.log(inputLength);

function validateInput() {

    inputEl.value.trim().length === inputLength ? changeClass('valid', 'invalid') : changeClass('invalid', 'valid')

    if (inputEl.value.trim().length === inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
function changeClass(first, second) {
    inputEl.classList.remove(second);
    inputEl.classList.add(first);
}