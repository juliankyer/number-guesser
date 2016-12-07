var clearBtn = document.getElementById("clear");
var computerNumber = Math.floor(Math.random() * 100 + 1);
var numDisplay = document.getElementById("num-display");
var userGuess = document.getElementById("user-guess");
var guessBtn = document.getElementById("guess-btn");
var resetBtn = document.getElementById('reset-btn')
var displayNumber = userGuess.value;
var critique = document.getElementById("feedback");

function emptyInput() {
  userGuess.value = "";
}

clearBtn.addEventListener("click", function () {
  emptyInput();
})

guessBtn.addEventListener("click", function() {
  var userNum = userGuess.value;
  numDisplay.innerText = userNum;
  checkGuess();
})

resetBtn.addEventListener("click", function() {
  emptyInput();
  numDisplay.innerText = "#";
  critique.innerText = "Enter your guess";
  computerNumber = Math.floor(Math.random() * 100 + 1);
})

function checkGuess () {
  console.log(computerNumber);
  displayNumber = parseInt(userGuess.value);
  if (displayNumber > computerNumber) {
    critique.innerText = "That's too high";
  } else if (displayNumber < computerNumber) {
    critique.innerText = "That's too low";
  } else if (displayNumber===computerNumber) {
    critique.innerText = "BOOM!"
  } else {
    critique.innerText = "...not a number.";
    numDisplay.innerText = "?";
  }
  emptyInput();
}
