src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"

var wins = 0;
var losses = 0;
var randomNum = Math.floor(Math.random * 100) + 1;
var userGuess = prompt("Pick A Number Between 1 and 100!");


$("#main-button").on("click", function(){
    Math.floor(Math.random * 100) + 1;
    prompt("Pick A Number Between 1 and 100!");
    if (userGuess === randomNum) {
        alert("You Guessed Correctly!");
        wins++;
    }

    else {
        alert("You Guessed Incorectly!");
        losses++;
    }
    
})