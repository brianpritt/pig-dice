playerOne = {name: "playerOne", score: 0, tally: 0}
computer = {name: "computer", score: 0, tally:0}
var currentPlayer = playerOne;



function diceRoll() {//rolls dice
  return (1 + Math.floor(Math.random() * 6));
}

function computerPass() {//how to handle a "pass"
  currentPlayer.score += currentPlayer.tally;
  $(".computer-roll").text("Computer Rolls: " + computer.tally);
  $(".p2-score").text(" " + computer.score);
  $(".roll").text("");

  currentPlayer.tally = 0;

  if (currentPlayer.name === "playerOne") {
    currentPlayer = computer;
  } else {
    currentPlayer = playerOne;
  }
}

function computerPlay() {//for computer taking its' turn
  if (currentPlayer.name === "computer") {
    for (var index = 0; index <= 1; index++) {
      var dice = diceRoll();
      if (dice > 1) {
        currentPlayer.tally += dice;
      } else {
        currentPlayer.tally = 0;
        index = 2;
      }
    }
    computerPass();
  }
}

function playerTurn() {
  dice = diceRoll();

  if (dice > 1) {
    currentPlayer.tally += dice;
  } else {
    currentPlayer.tally = 0;
    // debugger;
    computerPass();
    computerPlay();
  }
  return dice;
}



$(function() {
  $(".roll-dice").click(function(){//listens for "roll"
    var turnOfturns = playerTurn();
    $(".p1-score").text(playerOne.score);
    $(".p2-score").text(computer.score);
    $(".roll").text("Roll: " + turnOfturns);
    $(".tally").text("Tally: " + playerOne.tally);
  });

  $(".pass").click(function(){//listens for "pass"
    computerPass();
    $(".p1-score").text(playerOne.score);
    computerPlay();
  });
});
