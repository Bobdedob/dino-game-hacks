#speed
  Runner.instance_.setSpeed(1000)
#immortality
  var original = Runner.prototype.gameOver
  Runner.prototype.gameOver = function (){}
#jump-boost
Runner.instance_.tRex.setJumpVelocity(15)
