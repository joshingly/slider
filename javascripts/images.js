/*jshint browser:true devel:true */

(function() {
  "use strict";
  var Slider, Images;
  this.Slider = this.Slider || {};

  this.Slider.Images = Images = (function() {

    function Images(element, imageDirectory, imageNames, imageType) {
      var images = [];
      this.element = element;

      for ( var i = 0; i < imageNames.length; i++ ) {
        images.push(imageDirectory + "/" + imageNames[i] + "." + imageType);
      }

      this.viewable = images.slice(0,5);
      this.notViewable = images.slice(5, images.length);

      this.preload(this.viewable);
      this.preload(this.notViewable);

      this.output();
    }

    Images.prototype.preload = function(images) {
      var imgs = [];

      for ( var i = 0; i < images.length; i++ ) {
        imgs[i] = new Image();
        imgs[i].src = images[i];
      }
    };

    Images.prototype.output = function() {
      var html = "";
      for ( var i = 0; i <= this.viewable.length - 1; i++ ) {
        html += this.outputImageElement(this.viewable[i]);
      }

      this.clearChildren();
      this.element.insertAdjacentHTML('beforeend', html);
    };

    Images.prototype.clearChildren = function() {
      while ( this.element.firstChild ) {
        this.element.removeChild(this.element.firstChild);
      }
    };

    Images.prototype.outputImageElement = function(imagePath) {
      return '<img src="' + imagePath + '">';
    };

    Images.prototype.slideNext = function() {
      this.notViewable.push(this.viewable.shift());
      this.viewable.push(this.notViewable.shift());

      this.output();
      return false;
    };

    Images.prototype.slidePrev = function() {
      this.notViewable.unshift(this.viewable.pop());
      this.viewable.unshift(this.notViewable.pop());

      this.output();
      return false;
    };

    return Images;
  })();
}).call(this);
