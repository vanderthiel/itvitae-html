var w;

function startWorker() {
  // Check of Worker door de browser wordt ondersteund
  if (typeof (Worker) !== "undefined") {
    if (typeof (w) == "undefined") {
      // maak een nieuw worker proces op een aparte thread
      w = new Worker("worker.js");
    }
    // Koppel een event van de worker, afgegeven via postMessage
    w.onmessage = function (event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() {
  // stop de worker. de aparte thread wordt afgesloten
  w.terminate();
  w = undefined;
}