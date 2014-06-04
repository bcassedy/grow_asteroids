(function(root){
  Asteroids.newGame = function () {
    var Asteroids = root.Asteroids = (root.Asteroids || {})
    var canvas = Asteroids.canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var game = new Asteroids.Game(ctx);
    Asteroids.game = game;
    game.begin();
  }
})(this);
