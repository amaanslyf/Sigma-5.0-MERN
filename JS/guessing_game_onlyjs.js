const maxNum = prompt("Enter the maximum number for the guessing game");
const randomNum = Math.floor(Math.random() * maxNum) + 1;
let guess = prompt("Enter your first guess");

while (true) {
    if (guess.toLowerCase() === "quit") {
        break;
    }
    
    guess = Number(guess); // Convert input to a number

    if (guess === randomNum) {
        console.log("CONGRATS YOU WIN!");
        break;
    } else if (guess > randomNum) {
        guess = prompt("Too high, try again");
    } else {
        guess = prompt("Too low, try again");
    }
}
console.log("GAME OVER");