 var theta = 0.0;
  var rotationSpeed = 0.01;
  var colorFrom, colorTo;
function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);

}

function draw(){
  colorFrom = color(0,
  100,
  255);
  colorTo = color(250,
  255,
  100);
  
  background(240);
  noStroke();
  push();
  translate(width/2, height/2);
  scale(mouseX / 200, mouseY / 200);
  rotate(theta);
  var lerpAmt = map(mouseX, 0, width, 0, 1.0);
    var lerpedCol = lerpColor(colorFrom,
      colorTo,
      lerpAmt);    
    fill(lerpedCol);
  rect(0,0,50,50);
  rect(-100,-100,50,50);
  rect(100,100,50,50);
  rect(100,-100,50,50);
  rect(-100,100,50,50);
  pop();
  theta += rotationSpeed;
}
  