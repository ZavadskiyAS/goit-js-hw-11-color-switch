const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");
let interval;

start.addEventListener("click", runStartBtn);
stop.addEventListener("click", runStopBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
  let color = randomIntegerFromInterval(0, colors.length - 1);
  console.log(color);
  body.style.backgroundColor = colors[color];
}

function runStartBtn() {
  start.disabled = true;
  //   console.log("click Start");
  // start.removeEventListener("click", runStartBtn);
  interval = setInterval(randomColor, 1000);
}

function runStopBtn() {
  start.disabled = false;
  // start.addEventListener("click", runStartBtn)
  //   console.log("click Stop");
  clearInterval(interval);
}
