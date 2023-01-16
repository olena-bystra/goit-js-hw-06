const spanColor = document.querySelector('.color');
const body = document.body;
body.backgra
console.log(body);
const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor(event){
    let randomColor = getRandomHexColor();

    body.style.backgroundColor = randomColor;

    spanColor.textContent = randomColor;

};


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

