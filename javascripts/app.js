/*jshint browser:true devel:true */
/*global Slider:true */

(function() {
  "use strict";

  //ready, set, go!
  document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("slider");
    var slider = new Slider(element, "images", ["thumb_01","thumb_02","thumb_03","thumb_04","thumb_05",
                                                "thumb_06","thumb_07","thumb_08","thumb_09","thumb_10"], "gif");

    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    prev.addEventListener("click", function() {
      slider.slidePrev();
    });

    next.addEventListener("click", function() {
      slider.slideNext();
    });
  });
}).call(this);
