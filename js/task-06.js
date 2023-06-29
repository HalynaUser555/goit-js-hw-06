const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', validateInput);
const inputLength = Number(inputEl.dataset.length);

console.log(inputLength);

function validateInput() {

    if (inputEl.value.length === inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}