function setup() {
  createCanvas(400,400);
  beauty(20);
}


function beauty(i){
  
  noStroke();
 fill(255-i,240,100);
  arc(200,50,80,80,0,PI);//face
  fill(100,100,230-i);
  triangle(130,50,270,50,200,10);//hat
  fill(40,40,140+i);
  triangle(185,60,180,68,190,68);//left eye
 fill(55,220-i,110);
  rect(210,60,8,8);//right eye
  fill(220,130,130+i);
  ellipse(200,80,8,8);//mouth
  stroke(200,110,50+i);
  line(160,50,160,100);
  line(240,50,240,100);
  fill(200,100,40+i);
  triangle(160,100,150,110,170,110);
  fill(200,100,40+i);
  ellipse(240,108,16,16);//ear rings 
  noStroke();
  fill(30,20,120-i);
  ellipse(200,100,20,20);
  fill(40,190,120+i);
  triangle(190,100,170,90,170,110);
  triangle(210,100,230,90,230,110);//butterfly tie
  fill(120,230,220+i);
  rect(180,110,40,80);//body
  fill(255,100,20+i);
  triangle(200,190,150,240,250,240);//dress
  stroke(200,110,50+i);
  line(180,240,130,265);
  line(220,240,230,280);//leg
  line(180,140,140,120);
  line(220,140,200,170);//arm
  
  
  

}