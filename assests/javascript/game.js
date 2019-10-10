var words = ["Rugrats", "Hey Arnold", "The Magic School Bus", "Doug", "Recess", "All That", "The Wild Thornberrys", "Pinky and The Brain", "The Famous Jet Jackson", "Smart Guy", "Sister Sister", "Gullah Gullah Island"]

var randomWord = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect= [];
var wrongGuesses = [];
var letterGuessed = "";

var win = 0;
var loss = 0;
var guessesleft= 6;

function start() {
    randomWord = words[Math.floor(Math.random()*words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }
}


// function startGame() {
//     randomWord = words[Math.floor(Math.random() * words.length)];
//     lettersOfWord = randomWord.split("");
//     blanks = lettersOfWord.length;
//     for (var i = 0; i < blanks; i++) {
//         blanksAndCorrect.push("_");
//     }

//     document.getElementById("blanks").innerHTML = " " + blanksAndCorrect.join(" ");

//     console.log(randomWord);
//     console.log(lettersOfWord);
//     console.log(blanks);
//     console.log(blanksAndCorrect);
// }

// function reset() {
//     guessesleft = 6;
//     wrongGuesses = [];
//     blanksAndCorrect = [];
//     startGame()
// }

// var letterInWord = false; 

// for (var i = 0; i < blanks; i++) {
//     if (randomWord[i] == letter) {
//         letterInWord = true;
//     }
// }

// if (letterInWord) {
//     for (var i = 0; i < blanks; i++) {
//         if (randomWord[i] == letter) {
//             blanksAndCorrect[i] = letter;
//         }
//     }
// }

// else {
//     wrongGuesses.push(letter);
//     guessesleft--;
// }
// console.log(blanksAndCorrect);

// function complete() {
//     console.log("Wins:" + wins + "|losses:" + losses + "| guesses left:" + guessesleft)

//     if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
//         wins++;
//         reset()

//         document.getElementById("winstracker").innerHTML = " " + wins;
//     } else if (guessesleft === 0) {
//         losses++;
//         reset()
//         document.getElementById("image").src = ""
//         document.getElementById("guessesleft").innerHTML = " " + guessesleft;
//     }

//     document.getElementById("current ")
// }

