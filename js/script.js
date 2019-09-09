function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) return "papier";
  else if (argMoveId == 3) return "nożyczki";
  else {
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
}
function displayResult(argPlayerMove, argComputerMove) {
  switch (argPlayerMove) {
    case "papier":
      if (argComputerMove == "kamień")
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc <span class="green">wygrałeś!</span>`
        );
      else if (argComputerMove == "nożyczki")
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc <span class="red">przegrałeś!</span>`
        );
      else
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc remis!`
        );
      break;
    case "kamień":
      if (argComputerMove == "nożyczki")
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc <span class="green">wygrałeś!</span>`
        );
      else if (argComputerMove == "papier")
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc <span class="red">przegrałeś!</span>`
        );
      else
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc remis!`
        );
      break;
    case "nożyczki":
      if (argComputerMove == "papier")
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc <span class="green">wygrałeś!</span>`
        );
      else if (argComputerMove == "kamień")
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc <span class="red">przegrałeś!</span>`
        );
      else
        printMessage(
          `Komputer wybrał <b>${argComputerMove}</b>, ty wybrałeś <b>${argPlayerMove}</b> więc remis!`
        );
      break;
    case "nieznany ruch":
      printMessage(`Wprowadziłeś złą liczbę!`);
      break;
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let playerMove = getMoveName(playerInput);
displayResult(playerMove, computerMove);
