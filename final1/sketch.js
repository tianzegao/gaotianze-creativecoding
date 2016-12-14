var txtInput;
var clearBtn;
var bgColor = 'black';
var txtVal = '';
var waveLengthOne = 125.0;
var waveLengthTwo = 110.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;

function setup() {
  txtInput = createInput();
  txtInput.position(20,20);
  txtInput.changed(handleInput);

  clearBtn = createButton('Clear sketch');
  clearBtn.position(175,20);
  clearBtn.mouseClicked(clearBg);
  createCanvas(windowWidth, windowHeight);
frameRate(30);
}

function draw() {

  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  
  translate(width/2, height/2);
fill(random(255),random(255),0);
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
 
  textSize(20);
  text(txtVal,x,y);   }

pointCount+=5;
  
}
function clearBg(){
  background(255,255,255);
}
function handleInput(){
  txtVal = this.value(); 
}


