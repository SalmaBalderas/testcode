

function setup() {

    var canvas = createCanvas(1500, 700, WEBGL);

    canvas.parent('sketch-holder');




}

function draw() {
    background(205, 102, 94);
    let c = color(255, 204, 0); 
    fill(c);
    push();
    translate(0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(200);
    pop();



}