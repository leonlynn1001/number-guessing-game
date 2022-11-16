const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
let number = document.querySelector(".number"); //maek?
let message = document.querySelector(".message"); //status
let userScroe = document.querySelector(".score");
let highScroe = document.querySelector(".highscore");
const againBtn = document.querySelector(".again");
let luckyNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = luckyNumber;
//type casting for userScore
let score = Number(userScroe.textContent);

console.log(typeof userScroe.textContent);
let userHightScore = parseInt(highScroe.textContent);
checkBtn.addEventListener("click", () => {
  //console.log(guess.value);
  let inputValue = Number(guess.value);
  if (!inputValue) {
    message.textContent = "Type a number to guess....";
  } else if (inputValue > luckyNumber) {
    message.textContent = "Too High...";
    //for score marks
    score -= 1;
    userScroe.textContent = score;
  } else if (inputValue < luckyNumber) {
    message.textContent = "Too Low...";
    //for score marks
    score -= 1;
    userScroe.textContent = score;
  } else if (inputValue === luckyNumber) {
    message.textContent = "Congratulations!You are Correct...";
    document.querySelector("body").style.backgroundColor = "green";
    //for highscore

    if (score > userHightScore) {
      highScroe.textContent = score;
    } else if (score < 0) {
      score = 0;
      highScroe.textContent = score;
    }
  } else {
    message.textContent = "Enter a number";
  }
});

///restart btn
againBtn.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  guess.value = "";
  number.textContent = "?";
  luckyNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start Guessing...";
  userScroe.textContent = Number(20);

  if (score > userHightScore) {
    highScroe.textContent = score;
  } else if (score < 0) {
    score = 0;
    highScroe.textContent = score;
  }
});
