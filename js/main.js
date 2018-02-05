var prompt = require('prompt');
var inquirer = require('inquirer');
var Game = require('./game.js');
var isLetter = require('is-letter');
var hangmanGame = new Game();
var userGuess = 10;
    prompt.start();
    gameBegin(userGuess);
    function gameBegin(guesses){
        console.log("Guesses left: " + guesses);
        if(hangmanGame.currentWord.compairingWords() === true){
            console.log("You win");
            return;
        }
        if(guesses <= 0){
            console.log("Game Over!");
            return;
        }
        console.log(hangmanGame.currentWord.display());
        prompt.get(["theGuess"], function(err, result){
            if(err) {
                return err;
            }
            if(hangmanGame.currentWord.foundIt(result.theGuess) === false){
                guesses --;
            }
            gameBegin(guesses);
        })
    }





// Welcome player 
// array of words to chose from
// display underscore for letters in the word
// takes in letters guess and compares it to the word
// if letter is correct it replaces the underscore
// if letter is incorrect guess of 10 goes down by one
// if guess runs out then game ends
