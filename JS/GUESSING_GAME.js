let maxNum, randomNum;

function startGame() {
    maxNum = document.getElementById("maxNum").value;
    if (!maxNum || maxNum <= 0) {
        alert("Please enter a valid max number.");
        return;
    }
    randomNum = Math.floor(Math.random() * maxNum) + 1;
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("message").innerText = "";
}

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    
    if (guess.toLowerCase() === "quit") {
        quitGame();
        return;
    }

    guess = Number(guess);
    
    if (isNaN(guess)) {
        document.getElementById("message").innerText = "Please enter a valid number!";
        return;
    }

    if (guess === randomNum) {
        document.getElementById("message").innerText = "🎉 CONGRATS! You guessed it!";
    } else if (guess > randomNum) {
        document.getElementById("message").innerText = "📉 Too high, try again!";
    } else {
        document.getElementById("message").innerText = "📈 Too low, try again!";
    }
}

function quitGame() {
    document.getElementById("message").innerText = "Game over! You quit.";
    document.getElementById("gameArea").style.display = "none";
}
