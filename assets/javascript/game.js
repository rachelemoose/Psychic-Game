// creating variables to hold the number of wins, and losses. They start at 0. 
var wins = 0;
var losses = 0;

//creating a variable for guesses left, which starts at 9. 
var guesses = 9; 

//creating an array that lists out all of the options the computer could guess from
var computerchoices = ["a", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "f", "s", "d", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

var lettersGuessed = [];

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("loses");
var guessesText = document.getElementById("Guesses_Left"); 
var guessesDoneText = document.getElementById("guesses_so_far");
var playerGuess;
var i = 9; //need to find a way to fix this to go down
//need to make computerguess store one variable per game 
var computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
document.onkeyup = function(event) {
    // computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
playerGuess = event.key;
if (guesses >= 0) {
    if (playerGuess === computerGuess) {
        wins++;
        console.log(playerGuess);
    } else {
        guesses--;
        console.log(computerGuess);
    }
    if ((guesses === 0) && (playerGuess !== computerGuess)); {
        losses++;
        // alert("You've lost!") - currently this comments everytime you lose
    };
    guessesDoneText.textContent = "Your guesses so far: " + playerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

    guessesText.textContent = "Guesses Left: " + i--; 
};
};

// learned this needs to be IN my function
// guessesDoneText.textContent = "Your guesses so far: " + playerGuess; 
// winsText.textContent = "Wins: " + wins;
// lossesText.textContent = "Losses: " + losses;
// var i = 9;
// guessesText.textContent = "Guesses Left: " + i--; 