(function() {
  "use strict";

  var MediaqueryManager = function() {

    var prevMq,
        curMq,
        events;

    var init = function() {

      curMq = getCurMQ();

      addEventListeners();
    };

    var addEventListeners = function() {
      window.addEventListener('resize', resize.bind(this), false);
    };

    var resize = function() {
      var mq = getCurMQ();

      if(mq !== curMq) {
        prevMq = curMq;
        curMq = mq;

        document.dispatchEvent(
          new CustomEvent('mqChanged', {
            detail: {
              'curMq': curMq,
              'prevMq': prevMq
            }
          })
        );
      }
    };

    var getPrevMQ = function() {
      return prevMq;
    };

    var getCurMQ = function() {
      var mq = window.getComputedStyle(document.body,':after').getPropertyValue('content');

      // Strip additional quotes. Some browsers (e.g. Mozilla Firefox 24) are including additional quotes in the returned :after value
      mq = mq.replace(/"/g, "");

      return mq;
    };

    return {
      init: init,
      getPrevMQ: getPrevMQ,
      getCurMQ: getCurMQ
    };
  };

  window.MediaqueryManager = MediaqueryManager;

}());