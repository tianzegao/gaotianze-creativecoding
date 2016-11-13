 function Particle(xpos, ypos){
    this.color = "blue";
  	this.size = 40;
    this.speed = 2;
    this.xpos = xpos;
    this.ypos = ypos;
}

Particle.prototype.increaseSpeed = function(){
	this.speed ++;
};
var particle, particle2;
var particleSystem = [];
var waveLengthOne = 125.0;
var waveLengthTwo = 110.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(100);
  //add the particles to our empty particle system array
  //translate(width/2, height/2);
  for(var i=0; i < 1000; i++){
    
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  	particleSystem.push( new Particle(x,y ) );
  }
  //noLoop();
  //rectMode(CENTER);
  
} 

function draw() {
  background(100);
  translate(width/2, height/2);
  colorFrom = color(0,
  100,
  200);
  colorTo = color(122,
  240,
  240);
  beginShape(LINES);
  //loop through each of the particles in the array and read out the properties into our ellipse call
  for(var i=0; i < particleSystem.length; i++){
    lerpAmt=map(sin(radians(i)),-1,1,0,1);
    var lerpedCol = lerpColor(colorFrom,
      colorTo,
      lerpAmt);    
    stroke(lerpedCol);
    vertex(particleSystem[i].xpos+random(5)-(mouseX/10),particleSystem[i].ypos+random(5)-(mouseY/10));
   // ellipse(particleSystem[i].xpos+random(5), particleSystem[i].ypos+random(5), particleSystem[i].size-(mouseX/20), particleSystem[i].size-(mouseX/20));
  }
  endShape();
}