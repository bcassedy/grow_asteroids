(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (){
    Asteroids.MovingObject.apply(this, arguments)
  }

  Function.prototype.inherits = function (superClass) {
    function Surrogate () {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
  }

  Bullet.inherits(Asteroids.MovingObject);

})(this)