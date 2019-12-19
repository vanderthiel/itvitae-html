window.onload = function(){
  // Get canvas, set context
  var surface = document.getElementById("routeplanner");
  var ctxt = surface.getContext("2d");

  // draw line
  ctxt.beginPath();
  ctxt.moveTo(10, 10);
  ctxt.lineTo(225, 350);
  ctxt.stroke();

  ctxt.beginPath();
  ctxt.moveTo(225, 350);
  ctxt.lineTo(500, 50);
  ctxt.lineWidth = 5;
  ctxt.stroke();

  // draw square
  // ctxt.beginPath();
  // ctxt.rect(25, 25, 200, 100);
  // ctxt.stroke();

  // draw circle
  // ctxt.beginPath();
  // ctxt.arc(150, 100, 40, 2 * Math.PI, false);
  // ctxt.lineWidth = 25;
  // ctxt.strokeStyle = "#0f0";
  // ctxt.stroke();

  // draw quadratic curve
  // ctxt.beginPath();
  // ctxt.moveTo(10, 380);
  // ctxt.quadraticCurveTo(300, -250, 580, 380);
  // ctxt.stroke();

  // draw bezier
  // ctxt.beginPath();
  // ctxt.moveTo(25, 25);
  // ctxt.bezierCurveTo(0, 200, 300, 300, 50, 400);
  // ctxt.stroke();

  // draw fancy thing
  // ctxt.beginPath();
  // ctxt.arc(300, 200, 75, 1.75*Math.PI, 1.25*Math.PI, false);
  // ctxt.lineTo(150, 125);
  // ctxt.quadraticCurveTo(300, 0, 450, 125);
  // ctxt.lineTo(353,144);
  // ctxt.strokeStyle = "blue";
  // ctxt.lineCap = "round";
  // ctxt.lineWidth = 10;
  // ctxt.stroke();

  // Geolocation
  var locator = window.navigator.geolocation;
  // eenmalig
  locator.getCurrentPosition(
    function(pos){ console.log(pos); },
    function(){});
  // met een watcher, periodiek
  // let watcher = locator.watchPosition(
  //   function (pos) { console.log(pos); },
  //   function (pos) { });
  // locator.clearWatch(watcher);
};