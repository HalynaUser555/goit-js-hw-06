let counterValue = 0;

const counterValueEl = document.querySelector('#value');
const decrementListenerBtn = document.querySelector('[data-action="decrement"]');
const incrementListenerBtn = document.querySelector('[data-action="increment"]');

decrementListenerBtn.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.innerText = counterValue;
    console.log(counterValueEl.innerText);
});


incrementListenerBtn.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.innerText = counterValue;
    console.log(counterValueEl.innerText);
});
