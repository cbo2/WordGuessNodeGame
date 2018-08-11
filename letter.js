// Letter.js: Contains a constructor, Letter. This constructor should be able to either display 
// an underlying character or a blank placeholder (such as an underscore), depending on whether 
// or not the user has guessed the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// HINT: If you name your letter's display function toString, JavaScript will call that function 
// automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

function Letter(letter) {
    this.letter = letter;
    this.letterGuessed = false;
}

Letter.prototype.toString = function() {
    if (this.letterGuessed || this.letter === ' ') {
        return this.letter;
    } else {
        return "_";
    }
}

Letter.prototype.checkLetter = function(guess) {
    if (guess === this.letter) {
        this.letterGuessed = true;
        return true;
    }
}


var letterArray = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// test();
function test() {
    for (var i = 0; i < letterArray.length; i++) {
        // create the entire alphabet
        var myLetter = new Letter(letterArray[i]);
        if (letterArray[i] === 'j') {
            myLetter.checkLetter(letterArray[i]);
        }
        console.log(myLetter.toString());
    }
}

module.exports = Letter;
