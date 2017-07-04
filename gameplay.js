$(document).ready(function(){
  var counter = 5;
  var userScore = 0;
  var compScore = 0;

  function start() {
    var interval = setInterval(function() {
      counter--;
      // Display the timer
      $("#timer").text(counter);
      //When timer runs out
      if (counter == 0) {

        //Generate the answer for the computer
        var compAnswer = genCompAnswer();
        var userAnswer = Number($('input[name="game"]:checked').val());

        //Change the Symbol at bottom to Comp and user answers
        var string = "compAnswer"
        checkSymbol(compAnswer, string);
        var string = "userAnswer"
        checkSymbol(userAnswer, string);

        //Check the Winner
        var result = checkWinner(userAnswer , compAnswer);
        scoreKeep(result);
        setTimeout(function() { alert(result); }, 250);
        //$("#compAnswer").text(compAnswer);
        //$("#userAnswer").text(userAnswer);

        clearInterval(interval);
        counter = 5;

        //Check to See if there's a Winner
        setTimeout(function() {checkGameWinner(userScore, compScore);},500);
        $("#restart").text("Next Round");

      }
    }, 1000);
  }
  $("button").click(function(){

    $("#timer").text(counter);
    start();
  });

  function genCompAnswer() {
    var random = Math.floor(Math.random()*5)+1;
    return random;
  }

  function checkWinner(a,b) {

    if (a == b) {
      return ("TIE");
    } else {
      switch (a) {
        case 1:
          if (b == 3 || b == 4) {
            return ("WINNER");
          } else {
            return ("LOSER");
          }
        case 2:
          if (b == 1 || b == 5) {
            return ("WINNER");
          } else {
            return ("LOSER");
          }
        case 3:
          if (b == 2 || b == 4) {
            return ("WINNER");
          } else {
            return ("LOSER");
          }
        case 4:
          if (b == 2 || b == 5) {
            return ("WINNER");
          } else {
            return ("LOSER");
          }
        case 5:
          if (b == 1 || b == 3) {
            return ("WINNER");
          } else {
            return ("LOSER");
          }
      }
    }
  }

  function scoreKeep(a) {

    switch (a) {
      case ("WINNER") :
        userScore += 1
        $("#userScore").text(userScore);
        break;
      case ("LOSER") :
        compScore += 1
        $("#compScore").text(compScore);
        break;
      default:

    }
  }

  function checkGameWinner(a,b) {

    if (a == 3) {
      alert("Congratulations! You won the game! Play Again?");
      gameReset();
    } else if (b == 3) {
      alert("That sucks :( You lost the game. Play Again?");
      gameReset();
    }
  }

  function checkSymbol(a,b) {

    switch(a) {
      case 1 :
      document.getElementById(b).src = "images/rock.png"
      break;
      case 2 :
      document.getElementById(b).src = "images/paper.png"
      break;
      case 3 :
      document.getElementById(b).src = "images/scissors.png"
      break;
      case 4 :
      document.getElementById(b).src = "images/lizzard.png"
      break;
      default:
      document.getElementById(b).src = "images/spock.png"
    }

  }

  function gameReset() {
    $("#restart").text("Start");
    userScore = 0;
    $("#userScore").text(userScore);
    compScore = 0;
    $("#compScore").text(compScore);
  }

});
