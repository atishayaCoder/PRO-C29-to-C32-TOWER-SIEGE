class Ground {
    constructor(xInput, yInput, wdithInput, heightInput) {
        //construction of ground using matter.js
        var options = {
            isStatic: true
        }
        this.width = wdithInput;
        this.height = heightInput;
        this.body = Bodies.rectangle(xInput, yInput, this.width, this.height, options);
        World.add(userWorld, this.body);
    }
    display() {
        //display of ground using matter.js
        push();
        rectMode(CENTER);
        stroke("black");
        strokeWeight(3);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }

}