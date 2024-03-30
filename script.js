let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = parseInt(inputElement.value);

  while (attempts > 0) {
    if (randomNumber === guess) {
      feedbackElement.innerHTML = "Good job! You guessed it correctly!";
      feedbackElement.style.color = "green";
      attempts = 0;
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = "Too low! Try again";
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = "Too high! Try again";
      feedbackElement.style.color = "red";
      break;
    }
    attemps --;
  }
  if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "You lost your attemps... Game Over!";
  }
}
