var count;
var theta = 0.0;
var rotationSpeed = 0.001;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();
  count = 10;
  push();
  //translate(100, 100);
  for (var i = 0; i < count; i++) {
    stroke(0,180,180);
    fill(0,255,255,100);
    if (i < 6) {
      beginShape();
      vertex(100 + i * 10, 100 + i * 10);
      vertex(150, 100 + i * 10);
      vertex(200, 150 + i * 10);
      vertex(250, 100 + i * 10);
      vertex(300 - i * 10, 100 + i * 10);
      vertex(350 - i * 10, 300 - i * 10);
      vertex(250, 300 - i * 10);
      vertex(200, 250 - i * 10);
      vertex(150, 300 - i * 10);
      vertex(50 + i * 10, 300 - i * 10);
      endShape(CLOSE);
    } else {
      beginShape(QUADS);
      vertex(150, 160 + 10 * (i - 6));
      vertex(110 + 10 * (i - 6), 240 - 10 * (i - 6));
      vertex(150, 240 - 10 * (i - 6));
      vertex(190 - 10 * (i - 6), 200);
      vertex(210 + 10 * (i - 6), 200);
      vertex(250, 160 + 10 * (i - 6));
      vertex(290 - 10 * (i - 6), 240 - 10 * (i - 6));
      vertex(250, 240 - 10 * (i - 6));


      endShape(CLOSE);
    }

  }
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(theta);
  for (var i = 0; i < count; i++) {
    stroke(180,180,0);
    fill(255,255,0,50);
    if (i < 6) {
      beginShape();
      vertex(100 + i * 10 - width / 2, 100 + i * 10 - height / 2);
      vertex(150 - width / 2, 100 + i * 10 - height / 2);
      vertex(200 - width / 2, 150 + i * 10 - height / 2);
      vertex(250 - width / 2, 100 + i * 10 - height / 2);
      vertex(300 - i * 10 - width / 2, 100 + i * 10 - height / 2);
      vertex(350 - i * 10 - width / 2, 300 - i * 10 - height / 2);
      vertex(250 - width / 2, 300 - i * 10 - height / 2);
      vertex(200 - width / 2, 250 - i * 10 - height / 2);
      vertex(150 - width / 2, 300 - i * 10 - height / 2);
      vertex(50 + i * 10 - width / 2, 300 - i * 10 - height / 2);
      endShape(CLOSE);
    } else {
      beginShape(QUADS);
      vertex(150 - width / 2, 160 + 10 * (i - 6) - height / 2);
      vertex(110 + 10 * (i - 6) - width / 2, 240 - 10 * (i - 6) - height / 2);
      vertex(150 - width / 2, 240 - 10 * (i - 6) - height / 2);
      vertex(190 - 10 * (i - 6) - width / 2, 200 - height / 2);
      vertex(210 + 10 * (i - 6) - width / 2, 200 - height / 2);
      vertex(250 - width / 2, 160 + 10 * (i - 6) - height / 2);
      vertex(290 - 10 * (i - 6) - width / 2, 240 - 10 * (i - 6) - height / 2);
      vertex(250 - width / 2, 240 - 10 * (i - 6) - height / 2);

      endShape(CLOSE);

    }
    theta += rotationSpeed;
  }
  pop();
}