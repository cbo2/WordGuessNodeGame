// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create 
// an object representing the current word the user is attempting to guess. That means the constructor 
// should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
var Letter = require("./letter.js");

function Word(letterArray) {
    this.originalLetters = letterArray;
    this.letters = [];

    this.start = function () {
        for (var i = 0; i < this.originalLetters.length; i++) {
            this.letters[i] = new Letter(this.originalLetters[i].toLowerCase());
        }
    }
}

Word.prototype.guess = function (letterGuessed) {
    var goodGuess = false;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].checkLetter(letterGuessed.toLowerCase())) {
            goodGuess = true;
        }
    }
    return goodGuess;
}

Word.prototype.getWord = function () {
    var returnWord = "";
    for (var i = 0; i < this.letters.length; i++) {
        // returnWord += this.letters[i].toString();
        returnWord += this.letters[i];   // will make a call to Letter.toString()
    }
    return returnWord;
}

var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// test();
function test() {
    var word = new Word("hello");
    word.start();
    console.log(word.getWord());
}

module.exports = Word;
