var playerOne = {
  score: 0,
  name: "tom",
};

$(document).ready(function(){
  $("button#submit").click(function(){
  playerOne.score = Math.floor((Math.random() * 6) + 1);
  $("div.output").append(playerOne.score);
  });
});
