let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = "nieznany ruch";

if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else computerMove = "nożyczki";

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let playerMove = "nieznany ruch";

if (playerInput == 1) {
  playerMove = "kamień";
} else if (playerInput == 2) {
  playerMove = "papier";
} else playerMove = "nożyczki";
