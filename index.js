var Word = require("./word.js");
var inquirer = require("inquirer");

puzzleWords = [
    "hello world",
    "never say never",
    "are we there yet",
    "node",
    "zip it",
    "get busy living or get busy dying",
    "May you live all the days of your life"
]

// Randomly selects a word and uses the Word constructor to store it
var word = new Word(puzzleWords[Math.floor(Math.random() * puzzleWords.length)]);
word.start();
console.log(word.getWord());

// Prompts the user for each guess and keeps track of the user's remaining guesses
playRound();

// play one round inquiring a letter from the user and checking against the puzzle
function playRound() {

    // We create a list prompt. Specifying that the user must pick a random number between 1 and 5.
    inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: "Guess a letter [a-z]",
            validate: function (value) {
                // test for only lower case a-z or upper case A-Z using regex
                if (/[a-z]/i.test(value)) {
                    return true;
                }
                return false;   // returning false indicates to keep asking for input 
            }
        }

    ]).then(function (guess) {
        console.log("The user guessed: " + guess.userGuess);
        if (word.guess(guess.userGuess)) {
            console.log("\x1b[32m%s\x1b[0m", "CORRECT!");
        } else {
            console.log("\x1b[31m%s\x1b[0m", "INCORRECT!");
        }
        var puzzleResult = word.getWord();
        console.log(puzzleResult);
        if (/_/.test(puzzleResult)) {
            checkStatus(puzzleResult);
        } else {
            checkStatus();
        }
    });
}

function checkStatus(puzzle) {
    // check if number of guesses exceeds a threshold
    if (/_/.test(puzzle)) {   // if an underscores present -- not solved yet
        playRound();
    } else {
        console.log("You Won!!!!   Next word");
        word = new Word(puzzleWords[Math.floor(Math.random() * puzzleWords.length)]);
        word.start();
        console.log(word.getWord());
        playRound();
    }
}