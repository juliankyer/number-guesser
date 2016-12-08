var clearBtn = document.getElementById("clear");
var computerNumber = Math.floor(Math.random() * 100 + 1);
var numDisplay = document.getElementById("num-display");
var userGuess = document.getElementById("user-guess");
var guessBtn = document.getElementById("guess-btn");
var resetBtn = document.getElementById('reset-btn')
var displayNumber = userGuess.value;
var critique = document.getElementById("feedback");
var minNumber = 1;
var maxNumber = 100;

function emptyInput() {
  userGuess.value = "";
}

userGuess.onkeydown = function () {
  guessBtn.disabled = false;
  clearBtn.disabled = false;
  // guessBtn.style.backgroundColor = "#929497";
  // clearBtn.style.backgroundColor = "#929497";
}

clearBtn.addEventListener("click", function () {
  emptyInput();
  clearBtn.disabled = true;
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
    console.log(minNumber, maxNumber);
    computerNumber = Math.floor(Math.random() * maxNumber + 1);

  }
}
