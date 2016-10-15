function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
  frameRate(1);
}

function draw() {
  var col1 = color(random(200,255),random(200,255),0);
  var col2 = color(0, 0, random(100,150));
  fill(col1);
  rect(100,200,200,400);
  fill(col2);
  rect(300,200,200,400);
  fill(col1);
  rect(300,200,20,20);
  fill(col2);
  rect(100,200,20,20);
}