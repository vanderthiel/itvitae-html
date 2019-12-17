$(document).ready(function(){
  let opslag = [];

  $.ajax({
    url: 'http://localhost:3000/content',
    method: 'GET'
  }).then(function (result) {
    opslag = result;
    opslag.forEach(element => {
      $("#result").append('<li>' + element + '</li>');
    });
  });

  $("#save").click(function () {
    let item = $("#todo").val();

    $("#save").hide();
    $.ajax({
      url: 'http://localhost:3000/content',
      method: 'POST',
      data: { value: item }
    }).then(function () {
      $("#todo").val('');
      opslag.push(item);
      $("#save").show();
      $("#result").append('<li>' + item + '</li>');
    }, function(error){
      $("#save").show();
    });
  });
});
