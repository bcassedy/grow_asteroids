(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {})

  Function.prototype.inherits = function (superClass) {
    function Surrogate () {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
  }


  var MovingObject = Asteroids.MovingObject;

  var Greenie = Asteroids.Greenie = function () {
    MovingObject.apply(this, arguments);
    this.COLOR = 'green';
    this.radius = 5;
  }

  Greenie.inherits(MovingObject);

  Greenie.prototype.randomGreenie = function (dimX, dimY) {
    var r = 5
    return new Greenie(
      (dimX - 2*r)* Math.random() + r,
      (dimY - 2*r) * Math.random() + r,
      0,
      0,
      r,
      'green');
  }


})(this);