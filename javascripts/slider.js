(function() {
  "use strict";

  var Slider, App;
  this.Slider = this.Slider || {};

  this.Slider.App = {
    initialize: function (element_id, imageDirectory, imageNames, imageType) {
      //ready, set, go!
      document.addEventListener("DOMContentLoaded", function() {
        var element, box, images, prev, next;

        element = document.getElementById(element_id);

        element.insertAdjacentHTML('afterbegin', '<div id="box"></div>');
        box = element.firstChild;

        images = new window.Slider.Images(box, imageDirectory, imageNames, imageType);

        //buttons
        element.insertAdjacentHTML('afterbegin', '<a href="#" id="prev"><img src="images/btn_prev.jpg"></a>');
        element.insertAdjacentHTML('beforeend', '<a href="#" id="next"><img src="images/btn_next.jpg"></a>');

        prev = document.getElementById("prev");
        next = document.getElementById("next");

        prev.addEventListener("click", function() { images.slidePrev(); });
        next.addEventListener("click", function() { images.slideNext(); });
      });
    }
  };


}).call(this);
