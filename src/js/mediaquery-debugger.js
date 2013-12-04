(function() {
  "use strict";

  var MediaqueryDebugger = function(config) {

    var targetSelector,
        debuggerClass,
        isVisibleOnStartPointerDevice,
        isVisibleOnStartTouchDevice,
        keyTrigger,
        body = document.body,
        target;


    var init = function() {

      if(config) {
        debuggerClass = config.debuggerClass;
        targetSelector = config.targetSelector;
        isVisibleOnStartPointerDevice = config.isVisibleOnStartPointerDevice;
        isVisibleOnStartTouchDevice = config.isVisibleOnStartTouchDevice;
        keyTrigger = config.keyTrigger;
      }else{
        throw new Error('No config object supplied!');
      }

      target = document.querySelectorAll(targetSelector)[0];

      if(Modernizr.touch && !isVisibleOnStartTouchDevice ||
        !Modernizr.touch && !isVisibleOnStartPointerDevice) {
        hide();
      }

      addEventListeners();
    };

    var addEventListeners = function() {
      if(keyTrigger !== undefined) {
        body.addEventListener('keydown', function(e) {
          if(e.keyCode === keyTrigger) {
            toggle();
          }
        });
      }
    };

    var toggle = function() {
      target.classList.toggle(debuggerClass);
    };

    var hide = function() {
      target.classList.remove(debuggerClass);
    };

    return {
      init: init
    }
  };

  window.MediaqueryDebugger = MediaqueryDebugger;

}());