(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {})
  var canvas = Asteroids.canvas = this.document.getElementById("canvas");
  var ctx = canvas.getContext("2d");


  var game = new Asteroids.Game(ctx);
  Asteroids.game = game;
  game.addAsteroids(20);
  game.render();

  // var asteroids = Asteroids.asteroids = new Array(1);
  // asteroids[0] = new Asteroids.Asteroid.prototype.randomAsteroid(canvas.width,
  //    canvas.height);

  // function update_velocity(){
//     vx =
//   }


})(this);

// var game = new this.Asteroids.Game(ctx)
// game.start();