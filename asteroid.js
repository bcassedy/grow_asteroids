(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {})

  Function.prototype.inherits = function (superClass) {
    function Surrogate () {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
  }


  var MovingObject = Asteroids.MovingObject;

  var Asteroid = Asteroids.Asteroid = function () {
    MovingObject.apply(this, arguments);
    this.COLOR = "red";
    this.radius = Asteroid.RADIUS;
    //this.color = this.COLOR;
    //this.r = this.RADIUS;
  }

  // Asteroid.COLOR = "red", "blue", "yellow";
  // Asteroid.RADIUS = 30;

  Asteroid.inherits(MovingObject);

  Asteroid.getRadius = function(){
    return  40 * Math.random() + 10;
  }

  Asteroid.prototype.randomAsteroid = function (dimX, dimY) {
    var r = Asteroid.getRadius();
    return new Asteroid(
      (dimX - 2*r)* Math.random() + r,
      (dimY - 2*r) * Math.random() + r,
      Math.random() - 0.5,
      Math.random() - 0.5,
      r,
      'red');
  }


})(this);