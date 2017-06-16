var playerOne = {
  score: 0,
  name: "tom",
};
var totalScre =0;



$(document).ready(function(){
  $("button#submit").click(function(){
    //when clicked it generated random number
  var score1 = Math.floor((Math.random() * 6) + 1);
  playerOne.score = score1

  if (playerOne.score <= 1){
    console.log("oops!")
  } else {
    console.log("keep playing")
  totalScre+=score1;
  }
  $("div.output").text(totalScre);
  });
});
