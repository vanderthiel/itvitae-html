$(document).ready(function(){
  let opslag = [];

  let local = localStorage.getItem("opslag");
  if(local && local.length){
    opslag = JSON.parse(local);
  }

  $("#save").click(function () {
    let item = $("#todo").val();
    $("#result").append('<li>' + item + '</li>');

    opslag.push(item);
    localStorage.setItem("opslag", JSON.stringify(opslag));
  });
});