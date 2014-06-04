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
  }

  Asteroid.inherits(MovingObject);

  Asteroid.getRadius = function(){
    return  40 * Math.random() + 10;
  }

  Asteroid.prototype.randomAsteroid = function (dimX, dimY) {
    var r = Asteroid.getRadius();
    var asteroid = new Asteroid(
      (dimX - 2*r)* Math.random() + r,
      (dimY - 2*r) * Math.random() + r,
      Math.random() - 0.5,
      Math.random() - 0.5,
      r,
      'red'
    );
    if (asteroid.isCollidedWith(Asteroids.game.ship)) {
      return this.randomAsteroid(dimX, dimY);
    } else {
      return asteroid;
    }
  }


})(this);