// create mediaquery debugger bar
var mediaqueryDebugger = new window.MediaqueryDebugger({
  targetSelector: 'body',
  debuggerClass: 'mediaquery-debugger',
  isVisibleOnStartPointerDevice: false,
  isVisibleOnStartTouchDevice: false,
  keyTrigger: 68 // = d
});
mediaqueryDebugger.init();


// create mediaquery manager that dispatches events when the mediqeuery changes
var mediaqueryManager = new window.MediaqueryManager();
mediaqueryManager.init();


// listen to event that gets dispatched when active mediaquery changes
document.addEventListener('mqChanged', function(e) {

  var curMq = e.detail.curMq,
    prevMq = e.detail.prevMq;

  console.info("*****************");
  console.info("Current mediaquery: ", curMq);
  console.info("Previous mediaquery: ", prevMq);
});
