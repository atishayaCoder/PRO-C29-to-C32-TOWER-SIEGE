class Box extends BaseClass {
    constructor(xInput, yInput, widthInput, heightInput) {
        //construction of cube using matter.js
        super(xInput, yInput, widthInput, heightInput);
        this.image = loadImage("image/box.png");
    }

} 