function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
  noStroke();
  frameRate(1);
}

function draw() {
  colorMode(HSB, 360,width,height);
  push();
  for(var i=0;i<6;i++){
    fill(120,70*i,70*i);
    rect(10,10,20+20*i,20+20*i);
    translate(20*(i+1)+10,20*(i+1)+10);
  }
  pop();
}