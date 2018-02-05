

var Letter = require("./letter.js");

var Word = (fullWord) => {
    this.fullWord = fullWord;
    this.guessedWord = [];
    this.youWon = false;
    this.guesses = [];
    this.getLetters = () => {
        for(var i = 0; i < this.fullWord.length; i++){
            var newLetter = new Letter(this.fullWord[i]);
            this.guessedWord.push(newLetter);
        }
    }
    this.getLetters();

    this.correctLetter = (guessLetter) => {
        for(var i = 0; i < this.guesses.length; i++){
            if(guessLetter === this.guesses[i]){
                return true;
            }
        }
        console.log(guessLetter);
        var added = false;
        this.guesses.push(guessLetter);
        for (var i = 0; i < this.guessedWord.length; i++){
            if(this.guessedWord[i].letterin(guessLetter)){
                this.guessedWord[i].showsLetter = true;
                added = true;
            }
        }
        return added;
    }
    this.comparingWords = () => {
        for(var i = 0; i < this.fullWord.length; i++){
            if(this.fullWord.charAt(i) !== this.guessedWord[i].current){
                return false;
            }
        }
        return true;
    }
    this.display = () => {
        var emtpyString = "";
        for(var i = 0; i <  this.guessedWord.length; i++){
            emtpyString += this.guessedWord[i].current + " ";
        }
        return emtpyString;
    }
}
module.exports = Word;