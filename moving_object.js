(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(x, y, vx, vy, r, c) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.r = r;
      this.color = c;
    }

    MovingObject.prototype.draw = function (ctx){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI , false);
      ctx.lineWidth = 2;
      ctx.strokeStyle = this.color;
      if (this.fillStyle) {
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
      }
      ctx.stroke();
    }

    MovingObject.prototype.isCollidedWith = function (otherObject) {
      var distance = Math.sqrt(Math.pow((this.x - otherObject.x), 2) +
        Math.pow((this.y - otherObject.y), 2));
      if (distance < (this.r + otherObject.r)) {
        return true;
      } else {
        return false;
      }
    };


})(this);