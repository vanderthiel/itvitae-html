$(document).ready(function(){
  $.ajax({
    method: 'GET',
    url: 'https://swapi.co/api/people'
  }).then(
    displayOverview,
    function(){ alert('api not available'); }
  );
});

let displayOverview = function (data) {
  data.results.forEach(element => {
    // create an element to add to page
    let newEl = $('<li data-url="' + element.url + '">' + element.name + '</li>');

    $('#overview').append(newEl);
    newEl.click(displayDetails);
  });

  if (data.next) {
    // todo: show button with link to next results, fill with link in this data field
    //       when the link is clicked, it should also do displayOverview function
  }

  if (data.previous) {
    // todo: show button with link to previous results, fill with link in this data field
    //       when the link is clicked, it should also do displayOverview function
  }
};

let displayDetails = function () {
  $.ajax({
    method: 'GET',
    url: $(this).attr('data-url')
  }).then(
    function (data) {
      $('#details').show();
      $('#details .name').text('Name: ' + data.name);
      $('#details .height').text('Height: ' + data.height);
      $('#details .hair').text('Hair color: ' + data.hair_color);
    },
    function () { alert('details not available'); }
  );
};