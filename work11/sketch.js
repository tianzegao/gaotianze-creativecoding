
var table;
var data = [];
var sleepingTime=[];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/sleepingtime.csv", "csv", "header");
}
function setup() {
  
  createCanvas(800,800);
  textSize(8);
  colorMode(HSB, 360,width,height);
  noStroke();
  //sleepingTime = table.getColumn("SleepingTime");
  //for(var i=0;i<sleepingTime.length;i++){
   // ellipse(100+i*50,sleepingTime[i]*10,sleepingTime[i]*10,sleepingTime[i]*10);
  //}
  noLoop();
}

function draw(){
  
  //background(255);
  translate(100,100);
  //nested for loop
  //the inner loop is by rowCount so that we move
  //downward, then from left to right
   sleepingTime = table.getColumn("SleepingTime");
   date=table.getColumn("Date");
   
  for(var i=0;i<sleepingTime.length;i++){
    
    fill(sleepingTime[i]*25,sleepingTime[i]*100,sleepingTime[i]*100);
    ellipse(100+i*100,sleepingTime[i]*10,sleepingTime[i]*10,sleepingTime[i]*10);
    fill(255);
    text(sleepingTime[i],95+i*100,sleepingTime[i]*17);
    text(date[i],90+i*100,180);
  }
  textSize(15);
  text("Sleeping Time",250,-30);
}