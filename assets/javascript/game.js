// creating variables to hold the number of wins, and losses. They start at 0. 
var wins = 0;
var losses = 0;

//creating a variable for guesses left, which starts at 9. 
var guesses = 9; 
var guessesLeft = 9; 

//creating an array that lists out all of the options the computer could guess from
var computerchoices = ["a", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "f", "s", "d", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("loses");
var guessesText = document.getElementById("Guesses_Left"); 
var guessesDoneText = document.getElementById("guesses_so_far");
//letters the player has typed
var playerGuess;
var computerGuess;
var lettersGuessed = [];

//need to make computerguess store one variable per game 
computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
console.log(computerGuess)
document.onkeyup = function(event) {
    playerGuess = event.key;
    if (playerGuess === computerGuess) {
            wins++;
            guesses = 9;
            console.log(playerGuess + " was correct");
            alert("You're a psychic! You guessed " + playerGuess + " which is exactly what I was thinking!")
        };
        if (playerGuess !== computerGuess) {
            guesses--;
            lettersGuessed = [];
            console.log("Player guessed " + playerGuess + " which was wrong")
        };
        if (guesses === 0) {
            losses++;
            guesses = 9;
            alert("I'm sorry, you are not a psychic. Try again!")
        };
        guessesText.textContent = "Guesses Left: " + guesses; 
        guessesDoneText.innerHTML = "Your guesses so far: " + lettersGuessed.join(", ");
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
    };
        




    // guessesText.textContent = "Guesses Left: " + i--; 
// };

// learned this needs to be IN my function
// guessesDoneText.textContent = "Your guesses so far: " + playerGuess; 
// winsText.textContent = "Wins: " + wins;
// lossesText.textContent = "Losses: " + losses;
// var i = 9;
// guessesText.textContent = "Guesses Left: " + i--; 