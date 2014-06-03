(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Ship = Asteroids.Ship = function () {
    this.fillStyle = 'blue'
    Asteroids.MovingObject.apply(this, [root.Asteroids.canvas.width / 2, root.Asteroids.canvas.height/2, 0, 0, 10, '#0000ff']);
  }

  Function.prototype.inherits = function (superClass) {
    function Surrogate () {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
  }

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function (impulse){
    this.vx += impulse[0];
    this.vy += impulse[1];
  }

  Ship.prototype.fireBullet = function(){

    var norm = Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2))
    var speed = 30;
    return new Asteroids.Bullet(this.x,
           this.y,
           this.vx * ( 1 + speed / norm ),
           this.vy * ( 1 + speed / norm ),
           1,
           "yellow");
  }
})(this)