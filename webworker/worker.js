// worker start en draait zo lang hij actief is.
// In dit geval door setTimeout

// Let op: de DOM is niet beschikbaar

var i = 0;

function timedCount() {
  // stuur een bericht terug naar het proces dat deze worker gestart heeft
  postMessage(i++);
  setTimeout(timedCount, 500);
}

timedCount();