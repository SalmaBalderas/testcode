

function setup() {
   
    var canvas = createCanvas(1500,700, WEBGL);
    
    canvas.parent('sketch-holder');

    
    
    
}

function draw() {
    
    background(205, 102, 94);
    let c = color(255, 204, 0); 
    fill(c);
    push();
    translate(-500,10);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(150);
    pop();

    push();
    translate(0, 30);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(125);
    pop();
    

    push();
    translate(490,30);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(125, 200);
    pop();
    
    

}



