const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let randomColor = null;

  btnStart.addEventListener('click', () => {
    randomColor = setInterval(() => {
     bodyRef.style.backgroundColor = getRandomHexColor()
    }, 1000);
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
});

btnStop.addEventListener('click', () => {
    clearInterval(randomColor);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true)
  });
