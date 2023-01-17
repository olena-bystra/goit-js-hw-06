const inputFontSizeRef = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


inputFontSizeRef.addEventListener('input', event => {
    let fontSize = inputFontSizeRef.value;
    spanText.style.fontSize = `${fontSize}px`;
})
