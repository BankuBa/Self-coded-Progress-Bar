let progress = 0

let nextButton = document.querySelector(`.Next`);

let prevButton = document.querySelector(`.Previous`)

let progressBar = document.querySelector(`.filled`);
  

function increase() {

  progress += (1 / 3) * 100
  progressBar.style.width = `${progress}%`
}

function dicrease() {
  progress -= (1 / 3) * 100
    progressBar.style.width = `${progress}%`;
}

prevButton.addEventListener(`click` , dicrease)
nextButton.addEventListener(`click`, increase)