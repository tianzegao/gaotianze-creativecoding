var elesize=20;
var H;
var S;
var B;
function setup() {
  createCanvas(400,400);
  var myslider = createSlider(0,100,10);
  var myBtn = createButton("bibibi");
  myBtn.position(windowWidth/2,windowHeight/16);
  myslider.position(windowWidth/2-150,windowHeight/16);
  myslider.changed(Changeasize);
  myBtn.mouseClicked(ChangeaColor);
  }
  
function draw(){
  background(0);
  colorMode(HSB, 360,width,height);
  for(var i =0; i < 10; i++){
    fill(H, S, B);
 ellipse(cos(map(i, 0,10,0, TWO_PI))*100+windowWidth/2,
  sin(map(i,0,10,0,TWO_PI))*100+windowHeight/2,elesize,elesize
  );
    
  }
}

 function Changeasize(){
   elesize = this.value();
 }
function ChangeaColor(){
  H=random(360);
  S=random(width);
  B=random(height);
}

