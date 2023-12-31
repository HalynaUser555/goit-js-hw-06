const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
};

const anonymusText = refs.span.textContent;
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value) {
        refs.span.textContent = event.currentTarget.value;
    } else {
        refs.span.textContent = anonymusText;
    }
};