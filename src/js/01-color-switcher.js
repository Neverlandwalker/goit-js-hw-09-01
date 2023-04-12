const startBtn = document.querySelector(["[data-start]"]);
const stoptBtn = document.querySelector(["[data-stop]"]);
const bodyBg = document.querySelector('body')

startBtn.addEventListener('click', onStartClick);
stoptBtn.addEventListener('click', onStopClick);

let bodyColorChangeInterval = null;
startBtn.disabled = false;

function onStartClick(evt) {
    bodyColorChangeInterval = setInterval(() => {
        bodyBg.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBtn.disabled = true;
    
}
function onStopClick(evt) {
    clearInterval(bodyColorChangeInterval)
    startBtn.disabled = false;
    bodyBg.style.backgroundColor = 'white';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
