let TodoItem = function(id, name, status){
  this.Id = id;
  this.Name = name;
  this.Status = status;
}

$(document).ready(function(){

  // Initieel inladen van lijst van todo items
  $.ajax({
    url: 'http://localhost:3000/content',
    method: 'GET'
  }).then(function (result) {
    result.forEach(element => {
      appendToResult(element);
    });
  });

  // item opslaan
  $("#save").click(function () {
    let item = new TodoItem(-1, $("#todo").val(), 'new');

    $("#save").hide();
    $.ajax({
      url: 'http://localhost:3000/content',
      method: 'POST',
      data: item
    }).then(function (result) {
      $("#todo").val('');
      $("#save").show();
      appendToResult(result);
    }, function(error){
      $("#save").show();
    });
  });

  function appendToResult(content){
    let newElement = $('<li data-id="' + content.Id + '">' + content.Name + '<button class="delete">X</button></li>');
    $("#result").append(newElement);
    
    newElement.find(".delete").click(function(){
      let elementToDelete = $(this).parent();
      $.ajax({
        url: 'http://localhost:3000/content/' + elementToDelete.attr('data-id'),
        method: 'DELETE'
      }).then(function(){
        elementToDelete.remove();
      });
    });
  }
});
