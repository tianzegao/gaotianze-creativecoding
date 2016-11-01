var waveLengthOne = 125.0;
var waveLengthTwo = 90.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
var colorFrom, colorTo;
function setup(){
  createCanvas(400,400);
}
function draw(){
  colorFrom = color(0,
  100,
  140);
  colorTo = color(122,
  240,
  100);
  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  strokeWeight(1);
  stroke(100);
  translate(width/2, height/2);

  for(var i=0; i < pointCount; i++){
   lerpAmt=map(sin(radians(frameCount)),-1,1,0,1);
    var lerpedCol = lerpColor(colorFrom,
      colorTo,
      lerpAmt);    
    fill(lerpedCol);
    scale(map(sin(radians(frameCount)),-1,1,1,2));

  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  booboo(x,y);
  }

pointCount++;
}
function booboo(x,y){
  for(i=0;i<3;i++){
    ellipse(x+i*10,y+i*10,10+i*5,10+i*5);
  }
}
  

