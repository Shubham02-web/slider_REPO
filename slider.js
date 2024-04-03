const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");
let numberCount = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

let buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBG = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBG();
    slider.style.transform = `translateX(-${i * 800}px)`;
    numberCount = i + 1;
    button.style.backgroundColor = "white";
  });
});

const nextFraeme = () => {
  slider.style.transform = `translateX(-${numberCount * 800}px)`;
  numberCount++;
};

const lastFrame = () => {
  slider.style.transform = `translateX(0px)`;
  numberCount = 1;
};

const prevFrame = () => {
  slider.style.transform = `translateX(-${(numberCount - 2) * 800}px)`;
  numberCount--;
};

const firstFrame = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  numberCount = length;
};
const changeColor = () => {
  resetBG();
  buttons[numberCount - 1].style.backgroundColor = "white";
};
right.addEventListener("click", () => {
  numberCount < length ? nextFraeme() : lastFrame();
  changeColor();
});

left.addEventListener("click", () => {
  numberCount > 1 ? prevFrame() : firstFrame();
  changeColor();
});
