let rn = Math.floor(Math.random() * 20 + 1);

const checkTag = document.querySelector(".check");
const numInputTag = document.querySelector(".num");
const bodyTag = document.querySelector("body");
const questionTag = document.querySelector(".question");
const againTag = document.querySelector(".again");

const warnTag = document.querySelector(".warn");
const hintTag = document.querySelector(".hint");

const scoreTag = document.querySelector(".score");
const highScoreTag = document.querySelector(".high__score");

if (localStorage.getItem("hs") !== null) {
  let lhs = localStorage.getItem("hs");
  highScoreTag.textContent = `Highscore: ${lhs}`;
}

const showHint = (tex) => {
  hintTag.textContent = tex;
  numInputTag.value = "";
  score--;
  scoreTag.textContent = `Score: ${score}`;
};

let score = 20;
checkTag.addEventListener("click", () => {
  if (numInputTag.value.length === 0) {
    numInputTag.classList.add("empty");
    warnTag.textContent = "Can't be empty";
  } else if (
    parseInt(numInputTag.value) > 20 ||
    parseInt(numInputTag.value) < 1
  ) {
    numInputTag.classList.add("empty");
    warnTag.textContent = "Must be between 1 and 20";
    numInputTag.value = "";
  } else {
    if (parseInt(numInputTag.value) > rn) {
      showHint("too high");
    } else if (parseInt(numInputTag.value) < rn) {
      showHint("too low");
    } else {
      hintTag.textContent = "Congratulation!";
      bodyTag.classList.add("won");
      questionTag.textContent = rn;
      numInputTag.disabled = true;
      checkTag.disabled = true;
      if (localStorage.getItem("hs") !== null) {
        let gi = localStorage.getItem("hs");
        if (score > parseInt(gi)) {
          localStorage.setItem("hs", score);
          highScoreTag.textContent = `Highscore: ${score}`;
        }
      } else {
        localStorage.setItem("hs", score);
        highScoreTag.textContent = `Highscore: ${score}`;
      }
    }
  }
});

numInputTag.addEventListener("click", () => {
  if (numInputTag.classList.contains("empty")) {
    numInputTag.classList.remove("empty");
  }
  warnTag.textContent = "";
});

againTag.addEventListener("click", () => {
  numInputTag.value = "";
  numInputTag.disabled = false;
  checkTag.disabled = false;
  bodyTag.classList.remove("won");
  rn = Math.floor(Math.random() * 20 + 1);
  numInputTag.classList.remove("empty");
  hintTag.textContent = "";
  questionTag.textContent = "?";
  score = 20;
  scoreTag.textContent = `Score: ${score}`;
});
