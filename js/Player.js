class Player {
  constructor(x, y, width, height) {
    var rect_options = {
      isStatic: true
    };

//create the rectangular shaped body.
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height,rect_options);
    this.x = x;
    this.y = y;2
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 280, 300, this.width, this.height);
    pop();
  }
}
