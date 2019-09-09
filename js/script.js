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

switch (playerMove) {
  case "papier":
    if (computerMove == "kamień")
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc <span class="green">wygrałeś!</span>`
      );
    else if (computerMove == "nożyczki")
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc <span class="red">przegrałeś!</span>`
      );
    else
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc remis!`
      );
    break;
  case "kamień":
    if (computerMove == "nożyczki")
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc <span class="green">wygrałeś!</span>`
      );
    else if (computerMove == "papier")
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc <span class="red">przegrałeś!</span>`
      );
    else
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc remis!`
      );
    break;
  case "nożyczki":
    if (computerMove == "papier")
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc <span class="green">wygrałeś!</span>`
      );
    else if (computerMove == "kamień")
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc <span class="red">przegrałeś!</span>`
      );
    else
      printMessage(
        `Komputer wybrał <b>${computerMove}</b>, ty wybrałeś <b>${playerMove}</b> więc remis!`
      );
    break;
  case "nieznany ruch":
    printMessage(`Wprowadziłeś złą liczbę!`);
    break;
}
