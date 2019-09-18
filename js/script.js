const startGame = function(argPlayerInput) {
  const playGame = function(argPlayerInput) {
    clearMessages();
    const playerInput = argPlayerInput;
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);
    displayResult(playerMove, computerMove);
  };

  const getMoveName = function(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) return "papier";
    else if (argMoveId == 3) return "nożyczki";
    else {
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }
  };

  const displayResult = function(argPlayerMove, argComputerMove) {
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
  };
  playGame(argPlayerInput);
};
document.getElementById("play-rock").addEventListener("click", function() {
  startGame(1);
});
document.getElementById("play-paper").addEventListener("click", function() {
  startGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function() {
  startGame(3);
});
