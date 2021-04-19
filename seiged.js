class seiged extends BaseClass {
  //construction of pig using matter.js
  constructor(xInput, yInput) {
    super(xInput, yInput, 50, 50);

    this.image = loadImage("image/enemy.png");
    this.visibility = 255;
  }
  //display based on speed of each object of this class
  display() {
    //console.log(this.body.speed);
    if (this.body.speed < 5) {
      super.display();
    } else {

      World.remove(userWorld, this.body);
      push();
      this.visibility = this.visibility - 15;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();

    }
  }
  //generate score based on visibility of each object of this class
  score() {
    if (this.visibility < 0 && this.visibility > -1005) {
      score++;
    }
  }
}
