const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', validateInput);
const inputLength = document.querySelector('[data-length="6"]');


function validateInput(elementValue) {

    if (elementValue.length === inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}