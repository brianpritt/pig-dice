playerOne = {name: "playerOne", score: 0, tally: 0}
computer = {name: "computer", score: 0, tally:0}


function diceRoll() {
  return (1 + Math.floor(Math.random() * 6));
}

function whichPlayer(player){
  if (player = 1){
    return 2;
  }else{
    return 1;
  }
}

$(function() {
  var currentPlayer = playerOne;

  $(".roll-dice").click(function(){

    var dice = diceRoll();
    $("#roll-score").text("Roll: " +dice);

    if (dice > 1) {
      currentPlayer.tally += dice;
      $("#tally-score").text("Tally: " + currentPlayer.tally);
    }
    else {
      currentPlayer.tally = 0;
      $("#tally-score").text("Tally: " + currentPlayer.tally);
      currentPlayer = computer;
      console.log(currentPlayer.name);
    }
  });

  // function()
  $(".pass").click(function(){
    currentPlayer.score += currentPlayer.tally;
    $("#player-one p").text(playerOne.score);
    $("#computer p").text(computer.score);

    currentPlayer.tally = 0;
    if (currentPlayer == playerOne) {
      currentPlayer = computer;
    }
    else {
      currentPlayer = playerOne;
    }
    console.log(currentPlayer.name);
  });


  if (currentPlayer.name === "computer") {
    debugger;
    for (var index = 0; index < 2; index++) {
      var dice = rollDice();
      if (dice > 1) {
        currentPlayer.tally += dice;
        $("#tally-score").text("Tally: " + currentPlayer.tally);
      }
      else {
        currentPlayer.tally = 0;
        $("#tally-score").text("Tally: " + currentPlayer.tally);
        index = 2;
        currentPlayer = computer;
      }
    }
  }
});
