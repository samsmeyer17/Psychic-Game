src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"

$(document).ready(function () {
    
    var wins = 0;
    var losses = 0;
    
    


    $("#main-button").on("click", function(){
        var randomNum = Math.floor(Math.random * 100) + 1;
        var userGuess = prompt("Pick A Number Between 1 and 100!");
        prompt("Pick A Number Between 1 and 100!");
        if (userGuess === randomNum) {
            alert("You Guessed Correctly! You Have Won " + wins + " times!");
            wins++;

        }

        else {
            alert("You Guessed Incorectly! You Have Lost " + losses + " Times!");
            losses++;
        }
    })

});