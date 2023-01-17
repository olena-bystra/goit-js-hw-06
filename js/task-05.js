const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
   if( event.target.value.length > 0){
        nameRef.textContent = event.target.value ;}
    else { nameRef.textContent = 'Anonymous' };
});