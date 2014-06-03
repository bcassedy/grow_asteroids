(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {})
  var km = Asteroids.key
  var Game = Asteroids.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.DIM_X = Asteroids.canvas.width;
    this.DIM_Y = Asteroids.canvas.height;
    this.ship = new Asteroids.Ship();
    this.bindKeyHandlers();
    this.bullets = [];
  }

  Game.prototype.addAsteroids = function(n){
    for( var i = 0; i < n; i++){
      this.asteroids.push(Asteroids.Asteroid.prototype.randomAsteroid(
        Asteroids.canvas.width, Asteroids.canvas.height
      ));
    }
  }

  Game.prototype.draw = function () {
    this.hitAsteroids();
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
      this.asteroids[i].x += this.asteroids[i].vx;
      this.asteroids[i].y += this.asteroids[i].vy;
      this.boundaryCollision(this.asteroids[i]);
    }
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(this.ctx);
      this.bullets[i].x += this.bullets[i].vx;
      this.bullets[i].y += this.bullets[i].vy;
      this.boundaryCollision(this.bullets[i]);
    }
    this.ship.draw(this.ctx);
    this.ship.x += this.ship.vx;
    this.ship.y += this.ship.vy;
    this.boundaryCollision(this.ship);
    this.friction();
  }

  Game.prototype.friction = function() {
    this.ship.vx *= 0.97;
    this.ship.vy *= 0.97;
    for(var i = 0; i < this.asteroids.length ; i++){
      this.asteroids[i].vx += 5* (Math.random() - 0.5) / 60;
      this.asteroids[i].vy += 5* (Math.random() - 0.5) / 60;
    }
  }

  Game.prototype.boundaryCollision = function(o){
    if( o.x - o.r <= 0 || o.x + o.r >= this.DIM_X){
      o.vx = - o.vx;
    } else if (o.y - o.r <= 0 || o.y + o.r >= this.DIM_Y){
      o.vy = - o.vy;
    }
  }

  Game.prototype.checkCollisions = function(){
    for(var i = 0; i <this.asteroids.length; i++){
      if(this.asteroids[i].isCollidedWith(this.ship)){
        // root.alert("Game Over man");
        return true;
      }
    }
    return false;
  }

  Game.prototype.hitAsteroids = function () {
    if (this.bullets.length === 0) {
      return;
    }
    var pairs = [];
    var game = this;
    (function () {
      for (var i = 0; i < game.asteroids.length; i++) {
        for (var j = 0; j < game.bullets.length; j++) {
          if (game.asteroids[i].isCollidedWith(game.bullets[j])) {
            pairs.push(i);
            pairs.push(j);
            return;
          }
        }
      }
    })();
    if (pairs.length !== 0) {
      this.asteroids.splice(pairs[0], 1);
      this.bullets.splice(pairs[1], 1);
    }
  };

  Game.prototype.removeAsteroid = function (index) {
    this.asteroids.splice(index, 1);
  };

  Game.prototype.removeBullet = function (index) {
    this.bullets.splice(index, 1);
  };

  Game.prototype.render = function () {

      var requestID = root.requestAnimationFrame(Game.prototype.render.bind(this));
      if (this.checkCollisions()) { root.cancelAnimationFrame(requestID)}
      this.ctx.clearRect (0 ,0 ,this.DIM_X, this.DIM_Y );
      this.draw();
  };

  Game.prototype.bindKeyHandlers = function () {
    var game = this;
    var ship = this.ship;
    key('up', function () {
      ship.power([0, -0.5]);
    });
    key('down', function () {
      ship.power([0, 0.5]);
    });
    key('left', function () {
      ship.power([-0.5, 0]);
    });
    key('right', function () {
      ship.power([0.5, 0]);
    });
    key('space', function () {
      game.bullets.push(ship.fireBullet());
      if(game.bullets.length > 5)
      {
        game.bullets.shift();
      }
    })
  };



})(this)