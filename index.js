// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

var Word = require("./word.js");
var inquirer = require("inquirer");

// Randomly selects a word and uses the Word constructor to store it

var word = new Word("hello world");
word.start();
console.log(word.getWord());

// Prompts the user for each guess and keeps track of the user's remaining guesses
playRound();

function playRound() {

    // We create a list prompt. Specifying that the user must pick a random number between 1 and 5.
    inquirer.prompt([
      {
        type: "input",
        name: "userGuess",
        message: "Guess a letter [a-z]",
        validate: function(value) {   
            // test for only lower case a-z or upper case A-Z
            if (/[a-z]/i.test(value)) {  
              return true;
            }
            return false;   // returning false indicates to keep asking for input 
          }
      }
  
    ]).then(function(guess) {
        console.log("The user guessed: " + guess.userGuess);
        if (word.guess(guess.userGuess)) {
            console.log("\x1b[32m%s\x1b[0m", "CORRECT!");
        } else {
            console.log("\x1b[31m%s\x1b[0m", "INCORRECT!");
        }
        console.log(word.getWord());
        checkStatus();
    });
}

function checkStatus() {
    // check if number of guesses exceeds a threshold
    playRound();
}