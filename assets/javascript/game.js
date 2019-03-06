var animals =["elephant", "giraffe", "flamingo", "cheetah"];
var randomAnimals = animals[Math.floor(Math.random() * animals.length)];
var guessAnimals = [];

    for (var i=0; i<randomAnimals.length; i++){
    guessAnimals[i] = "-";
    }
    var el = document.getElementById('guessword');
        el.innerHTML=guessAnimals.join(" ");


var wrongGuesses = [];
// var eleme = document.getElementById('wrong');
//      eleme.innerHTML=wrongGuesses;

var guessesLeft = 15;
var ele = document.getElementById('remaining');
        ele.innerHTML=guessesLeft;

var wins = 0;
var elem = document.getElementById('numwins');
        elem.innerHTML=wins;

document.onkeyup = function(event) {

    var userGuess = event.key;

    // el.innerHTML=guessAnimals.join(" ");


    for(var j=0; j<randomAnimals.length; j++){

        if(randomAnimals[j]===userGuess){
            guessAnimals[j]=userGuess;
            }
    }

    if (userGuess !== randomAnimals[j]){
            wrongGuesses.push(userGuess);
            guessesLeft --;
            var wg = document.getElementById('wrong');
            wg.innerHTML=wrongGuesses;
        }


        if(guessAnimals.every((v,i)=>v == randomAnimals[i])) {
            alert("Congratulations, You Won!");
            wins++;
        }

        if(guessesLeft===0){
            alert("You lost, go to the zoo...\nWrong guesses:" + wrongGuesses);
        }

        var el = document.getElementById('guessword');
        el.innerHTML=guessAnimals.join(" ");

        var ele = document.getElementById('remaining');
        ele.innerHTML=guessesLeft;

        console.log(randomAnimals.length);
}
document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        // Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};