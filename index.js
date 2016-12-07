var clearBtn = document.getElementById("clear");
var computerNumber = Math.floor(Math.random() * 100 + 1);
var numDisplay = document.getElementById("num-display");
var userGuess = document.getElementById("user-guess");
var guessBtn = document.getElementById("guess-btn");
var displayNumber = userGuess.value;

clearBtn.addEventListener("click", function () {
  userGuess.value = "";
})

guessBtn.addEventListener("click", function() {
  var userNum = userGuess.value;
  numDisplay.innerText = userNum;
  checkGuess();
})

function checkGuess () {
  console.log(computerNumber);
  displayNumber = parseInt(userGuess.value);
  if (displayNumber > computerNumber) {
    console.log("Too high");
  } else if (displayNumber < computerNumber) {
    console.log("too low");
  } else if (displayNumber===computerNumber) {
    console.log("boom")
  }
}


// function resetGame () {
//
// }
