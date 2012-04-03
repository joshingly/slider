/*jshint browser:true devel:true */

(function() {
  "use strict";
  var Slider;

  this.Slider = Slider = (function() {

    function Slider(element, imageDirectory, imageNames, imageType) {
      var images = [];
      this.element = this.initialSetup(element);

      for ( var i = 0; i < imageNames.length; i++ ) {
        images.push(imageDirectory + "/" + imageNames[i] + "." + imageType);
      }

      this.viewable = images.slice(0,5);
      this.notViewable = images.slice(5, images.length);

      this.output();
    }

    Slider.prototype.initialSetup = function(element) {
      element.insertAdjacentHTML('afterbegin', '<div id="box"></div>');
      var box = element.firstChild;

      //buttons
      element.insertAdjacentHTML('afterbegin', '<a href="#" id="prev"><img src="images/btn_prev.jpg"></a>');
      element.insertAdjacentHTML('beforeend', '<a href="#" id="next"><img src="images/btn_next.jpg"></a>');

      return box;
    };

    Slider.prototype.output = function() {
      var html = "";
      for ( var i = 0; i <= this.viewable.length - 1; i++ ) {
        html += this.outputImageElement(this.viewable[i]);
      }

      this.clearChildren();
      this.element.insertAdjacentHTML('beforeend', html);
    };

    Slider.prototype.clearChildren = function() {
      while ( this.element.firstChild ) {
        this.element.removeChild(this.element.firstChild);
      }
    };

    Slider.prototype.outputImageElement = function(imagePath) {
      return '<img src="' + imagePath + '">';
    };

    Slider.prototype.slideNext = function() {
      this.notViewable.push(this.viewable.shift());
      this.viewable.push(this.notViewable.shift());

      this.output();
      return false;
    };

    Slider.prototype.slidePrev = function() {
      this.notViewable.unshift(this.viewable.pop());
      this.viewable.unshift(this.notViewable.pop());

      this.output();
      return false;
    };

    return Slider;
  })();
}).call(this);
