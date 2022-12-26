// Progress Bar Project

let button = document.querySelector(".btn");

button.addEventListener("click", () => {
  let circularProgress = document.querySelector(".circle");
  let progressValue = document.querySelector(".filling");
  let bottom = document.querySelector(".bottom");
  let bar = document.querySelector(".bar");
  let popup = document.getElementById("popup");

  let progressStartValue = 0,
    progressEndValue = 100,
    speed = 100;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
      setTimeout(() => {
        popup.classList.add("open-popup");
      }, 100);
    }

    bar.style.width = progressStartValue + "%";
  }, speed);
});

let close = document.getElementById("close");

close.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});
