(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {})
  var canvas = Asteroids.canvas = this.document.getElementById("canvas");
  var ctx = canvas.getContext("2d");


  var game = new Asteroids.Game(ctx);
  Asteroids.game = game;
  game.addAsteroids(20);
  game.render();

})(this);
