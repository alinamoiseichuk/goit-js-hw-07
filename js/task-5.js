function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnColor.addEventListener("click", handleClick);

function handleClick() {
const changeColor = getRandomHexColor();
bodyColor.style.backgroundColor = changeColor;
spanColor.textContent = changeColor;
}
