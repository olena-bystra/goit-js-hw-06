const decrementRef = document.querySelector("#counter button[data-action='decrement']");
const incrementRef = document.querySelector("#counter button[data-action='increment']");
let counterValueRef = document.querySelector('#value');
let counterValue = Number(counterValueRef.textContent);

const decrement = (function () {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
});



const increment = (function () {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
});

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);