var centerpointX = 300;
var centerpointY = 400;
function setup() {
  createCanvas(600,800);
  rectMode(CENTER);
}

function draw() {
  //noFill();
  noStroke();
  fill("grey");
  rect(centerpointX,centerpointY,260,380);
  fill("black");
  rect(centerpointX,centerpointY,220,320);
  fill("white");
  rect(centerpointX,centerpointY,160,260);
  fill("grey");
   rect(centerpointX,centerpointY,150,250);
   fill("black");
   triangle(350,275,
   380,275,
   375,525);
   rect(380,400,10,260);
   fill("white");
   ellipse(centerpointX,centerpointY,100,180);
   
   var c = color(255, 204, 0); 
   fill(c);
   ellipse(centerpointX,centerpointY,80,160);
   fill("black");
   ellipse(centerpointX,centerpointY,40,160);
   fill("white");
    ellipse(centerpointX,centerpointY,20,80);
   c = color('hsb(130, 100%, 50%)');
  fill(c); 
  triangle(centerpointX-9,centerpointY-10,
  centerpointX,centerpointY+10,
  centerpointX+9,centerpointY-10);
  
  
}