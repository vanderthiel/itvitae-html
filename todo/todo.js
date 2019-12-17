$(document).ready(function(){
  $("#save").click(function () {
    $("#result").append('<li>' + $("#todo").val() + '</li>');
  });
});
