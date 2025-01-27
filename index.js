const submitBtn = document.getElementById("submit-btn");
const displayText = document.getElementById("info");

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Example usage
const randomNumber = generateRandomNumber();
console.log(randomNumber);

submitBtn.onclick = function() {
    displayText.textContent = "";
    userAnswer = document.getElementById("answer").value;
    userAnswer = Number(userAnswer);
    if (userAnswer < randomNumber) {
        displayText.textContent = `It's not ${userAnswer}! The number is too low!`;
    }

    else if (userAnswer > randomNumber) {
        displayText.textContent = `It's not ${userAnswer}! The number is too high!`;
    }

    else {
        displayText.textContent = "Correct! You guessed it!";
    }
}