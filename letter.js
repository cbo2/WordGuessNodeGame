function Letter(letter) {
    this.letter = letter;
    this.letterGuessed = false;
}

Letter.prototype.toString = function () {
    if (this.letterGuessed || this.letter === ' ') {
        return this.letter;
    } else {
        return "_";
    }
}

Letter.prototype.checkLetter = function (guess) {
    if (guess === this.letter) {
        this.letterGuessed = true;
        return true;
    }
}

module.exports = Letter;
