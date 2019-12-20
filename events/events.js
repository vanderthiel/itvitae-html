// define my event
myEvent = new CustomEvent("myAction", {
  detail: {
    description: "Description of my action",
    timeofevent: new Date(),
    eventcode: 2
  },
  bubbles: true,
  cancelable: true
});

document.addEventListener("myAction", customEventHandler);

document.dispatchEvent(myEvent);

function customEventHandler(){
  alert(window.event.detail.description);
}