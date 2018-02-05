var Word = require("./word.js");
// words to chose from


var Game = () => {
var wordChoices = ["jungle", "apple", "disney", "cigar", "golf", "monkey"];
    
    this.wins = 0;
    this.loses = 0;
    this.guessesLeft = 0;
    this.lettersGuessed = [];
    this.startNewGame = () => {
        this.guessesLeft = 10;
        this.lettersGuessed = [];
        this.word = this.randomWord();
    };
    this.getRandomWord = () => {
    var randomWord = wordChoices[Math.floor(Math.random()* wordChoices.length)];
    var newWord = new Word(randomWord);
    newWord.randomWord();
    return newWord;
    };
};

module.exports = Game;

