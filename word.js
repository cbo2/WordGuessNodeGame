var Letter = require("./letter.js");

// This constructor will take a regular string and turn it into an array of Letter objects
function Word(letterArray) {
    this.originalLetters = letterArray;
    this.letters = [];

    this.start = function () {
        for (var i = 0; i < this.originalLetters.length; i++) {
            this.letters[i] = new Letter(this.originalLetters[i].toLowerCase());
        }
    }
}

// call this function to check a guessed letter against our puzzle
Word.prototype.guess = function (letterGuessed) {
    var goodGuess = false;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].checkLetter(letterGuessed.toLowerCase())) {
            goodGuess = true;
        }
    }
    return goodGuess;
}

// return the word with only guessed letters exposed, otherwise underscores to keep things secret
Word.prototype.getWord = function () {
    var returnWord = "";
    for (var i = 0; i < this.letters.length; i++) {
        // returnWord += this.letters[i].toString();
        returnWord += this.letters[i];   // will make a call to Letter.toString()
    }
    return returnWord;
}

module.exports = Word;
