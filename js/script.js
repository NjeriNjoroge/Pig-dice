var playerOne = {
  score: 0,
  name: "tom",
};

var totalScre = 0;
var scoreArray = [];



//user logic
$(document).ready(function(){
  $("button#submit").click(function(){
    //when clicked it generated random number
  var score1 = Math.floor((Math.random() * 6) + 1);
  playerOne.score = score1

  if (playerOne.score === 1){
    alert("Uko na one")
    $('#submit').prop('disabled', true)
  } else {
    console.log("keep playing")
  totalScre+=score1;
  }
  $("div.output").append("score" + " " + totalScre);
  });
//function for when the player holds
$("button#hold1").click(function(){

  var total = scoreArray.push(totalScre);
  for(var i in scoreArray) { total = scoreArray[i]; }
  //scoreArray.reduce((a, b) => a + b, 0);
$("div.output1").append("hold score is" + " " + total);
})

});
