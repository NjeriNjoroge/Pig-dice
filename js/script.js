// PLAYER ONE
var playerOne = {
  score: 0,
  name: "tom",
};

var totalScre = 0;
var scoreArray = [];

//PLAYER TWO
var playerTwo = {
  score: 0,
  name: "harry",
};

var totalScore = 0;
var scoreArray2 = [];


//user logic
$(document).ready(function() {
  $("button#submit").click(function() {
    //when clicked it generated random number
    var score1 = Math.floor((Math.random() * 6) + 1);
    playerOne.score = score1

    if (playerOne.score === 1) {
      alert("Uko na one")
      $('#submit').prop('disabled', true)
    } else {
      console.log("keep playing")
      totalScre += score1;
    }
    $("div.output").append("score" + " " + totalScre);
  });
  //function for when the player holds
  $("button#hold1").click(function() {

    var total = scoreArray.push(totalScre);
    for (var i in scoreArray) {
      total = scoreArray[i];
    }
    //scoreArray.reduce((a, b) => a + b, 0);
    $("div.output1").append("hold score is" + " " + total);
  })
});

//PLAYER TWO FUNCTIONS

$(document).ready(function() {
  $("button#submit2").click(function() {
    //when clicked it generated random number
    var score2 = Math.floor((Math.random() * 6) + 1);
    playerTwo.score = score2

    if (playerTwo.score === 1) {
      alert("Uko na one")
      $('#submit2').prop('disabled', true)
    } else {
      console.log("keep playing")
      totalScore += score2;
    }
    $("div.output2").append("score" + " " + totalScore);
  });
  //function for when the player holds
  $("button#hold2").click(function() {

    var total2 = scoreArray2.push(totalScore);
    for (var i in scoreArray2) {
      total2 = scoreArray2[i];
    }
    //scoreArray.reduce((a, b) => a + b, 0);
    $("div.output3").append("hold score is" + " " + total2);
  })
});
