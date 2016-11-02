playerOne = {name: "playerOne", score: 0, tally: 0}
computer = {name: "computer", score: 0, tally:0}
// scores = {p1score: 0, p1Total: 0, p2Score: 0, p2Tally : 0}

var currentPlayer = playerOne;



function diceRoll() {//rolls dice
  return (1 + Math.floor(Math.random() * 6));
}

function computerPass() {//how to handle a "pass"
  currentPlayer.score += currentPlayer.tally;
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
  }
}

function playerTurn(dice) {
  if (dice > 1) {
    currentPlayer.tally += dice;
  } else {
    currentPlayer.tally = 0;
  }
}

function checkScore() {
  if (playerOne.score >= 100){
    $("#you-win").show();
    $("#score").hide();
  }else if (computer.score>=100){
    $(".p2-score").text(computer.score);
    $("#you-lose").show();
    $("#score").hide();



  }
}

$(function() {
  $(".roll").text("Roll: " );
  $(".tally").text("Tally: ");
  $(".computer-roll").text("Computer roll: ");
  $(".roll-dice").click(function(){//listens for "roll"
    var diceValue = diceRoll();
    if (diceValue === 1){
      $(".roll").text("Roll: " + diceValue);
      $(".tally").text("Tally: " + playerOne.tally);
      playerOne.tally = 0;
      computerPass();
      computerPlay();
      $(".computer-roll").text("Computer roll: " + computer.tally);
      computerPass();
      checkScore();
    }else {
      playerTurn(diceValue);

      $(".p1-score").text(playerOne.score);
      $(".p2-score").text(computer.score);
      $(".roll").text("Roll: " + diceValue);
      $(".tally").text("Tally: " + playerOne.tally);
      checkScore();

    }
  });

  $(".pass").click(function(){//listens for "pass"
    computerPass();
    $(".p1-score").text(playerOne.score);
    computerPlay();
    $(".computer-roll").text("Computer roll: " + computer.tally)
    computerPass();
    checkScore();
  });
});
