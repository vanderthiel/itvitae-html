$(document).ready(function(){
  // aanmaken promise
  var promise = $.Deferred();

  // koppelen callback methoden voor resolve en reject
  promise.then(
    function(data){
      $("#result").append("<li>Gelukt:" + data + "</li>");
    },
    function(){
      $("#result").append("<li>Mislukt</li>");
    });

  // over 10 seconden, resolve promise en zet interval stop
  setTimeout(function () {
    promise.resolve("mijn data");
    clearInterval(iv);
  }, 10000);

  // iedere 3 seconden, voer deze functie uit
  let iv = setInterval(function () {
    $("#result").append("<li>Interval bereikt</li>");
  }, 3000);

  // Deze regel wordt als eerste ge-append
  $("#result").append("<li>Opgestart</li>");
});
