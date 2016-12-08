var clearBtn = document.getElementById("clear");
var numDisplay = document.getElementById("num-display");
var userGuess = document.getElementById("user-guess");
var guessBtn = document.getElementById("guess-btn");
var resetBtn = document.getElementById('reset-btn')
var displayNumber = userGuess.value;
var critique = document.getElementById("feedback");
var minNumber = 1;
var maxNumber = 100;
// var userMin = document.getElementById("user-min");
// var userMax = document.getElementById("user-max");
// var newComputerNumber = computerNumber(0, 100);

var computerNumber = Math.floor(Math.random() * 100 + 1);
// function computerNumber(minNumber, maxNumber) {
//   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// }
//
// userMin.addEventListener("input", function() {
//   minNumber = userMin.value;
//   minNumber = parseInt(minNumber);
//   newComputerNumber = computerNumber(minNumber, maxNumber);
//   console.log(newComputerNumber);
// })
//
// userMax.addEventListener("input", function() {
//   maxNumber = userMax.value;
//   maxNumber = parseInt(maxNumber);
//   newComputerNumber = computerNumber(minNumber, maxNumber);
//   console.log(newComputerNumber);
// })
//


function emptyInput() {
  userGuess.value = "";
}

userGuess.addEventListener("keyup", function () {
  resetBtn.disabled = false;
  clearBtn.disabled = false;
  guessBtn.disabled = false;
})

clearBtn.addEventListener("click", function () {
  emptyInput();
  clearBtn.disabled = false;
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
  computerNumber = Math.floor(Math.random() * maxNumber + 1);
})

function checkGuess () {
  console.log(computerNumber);
  displayNumber = parseInt(userGuess.value);
  if (displayNumber > computerNumber) {
    critique.innerText = "That's too high";
  } else if (displayNumber < computerNumber) {
    critique.innerText = "That's too low";
  } else if (displayNumber===computerNumber) {
    critique.innerText = "BOOM!";
  } else {
    critique.innerText = "...not a number.";
    numDisplay.innerText = "?";
  }
  emptyInput();
  outOfRange();
  levelUp();
}

function outOfRange () {
  parseInt(displayNumber);
  if (displayNumber > maxNumber || displayNumber < minNumber) {
    critique.innerText = "That's out of range";
  }
}

function levelUp () {
  if (displayNumber === computerNumber) {
    maxNumber = maxNumber += 10;
    minNumber = minNumber -= 10;
    alert("Nice job! To make the next round harder, your range will grow by 10 on either end!");
    critique.innerText = "...between " + minNumber + " and " + maxNumber;
    numDisplay.innerText = "#";
    computerNumber = Math.floor(Math.random() * maxNumber + 1);
    console.log(minNumber, maxNumber);
  }
}
