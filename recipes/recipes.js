$(document).ready(function(){
  document.getElementById("list").onclick = function(){
    console.log("je hebt op de lijst geklikt");
  };

  $("nav a").mouseenter(function(){
    var location = $(this).attr("href");
    $("article").hide();
    $(location).show();
  });
});