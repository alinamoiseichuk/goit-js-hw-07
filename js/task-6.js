const input = document.querySelector("input");
const btnGreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const newBox = document.createElement("div");
  newBox.classList.add("box")
  newBox.style.width = `${30 + amount * 10}px`;
  newBox.style.height = `${30 + amount * 10}px`;
  newBox.style.backgroundColor = getRandomHexColor();
  box.append(newBox);
}

function destroyBoxes() {
  box.innerHTML = "";
}

btnGreate.addEventListener("click", handleBtnGreate);
function handleBtnGreate() {
  const numberInput = Number(input.value);
  if (numberInput >= 1 || numberInput <= 100) {
    createBoxes(numberInput);
  }
}

btnDestroy.addEventListener("click", handleBtnDestroy);
function handleBtnDestroy() {
  destroyBoxes();
}
