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




document.onkeyup = function(event) {
    computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
    console.log("Computer guessed: " + computerGuess)
    playerGuess = event.key;
    if (playerGuess === computerGuess) {
            wins++;
            guesses = 9;
            lettersGuessed = [];
            console.log(playerGuess + " was correct");
            alert("You're a psychic! You guessed " + playerGuess + " which is exactly what I was thinking!")
        };
        if (playerGuess !== computerGuess) {
            guesses--;
            lettersGuessed.push(playerGuess);
            console.log("Player guessed " + playerGuess + " which was wrong")
        };
        if (guesses === 0) {
            losses++;
            guesses = 9;
            lettersGuessed = [];
            alert("I'm sorry, you are not a psychic. Try again!")
        };
        guessesText.textContent = "Guesses Left: " + guesses; 
        guessesDoneText.innerHTML = "Your guesses so far: " + lettersGuessed.join(', ');
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
    };
        
