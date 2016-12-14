
  var lexicon;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Click for Your Choice", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(50);
  textAlign(CENTER, TOP);
  fill(255,255,255);
  text("If I have a choice , I wanna be ", 10, 10, width-20, height-20)
  fill(random(100,255),random(100,255),random(100,255));
  var output1 = 
    lexicon.randomWord("jj") + " " + 
    lexicon.randomWord("nn") + ", " ;
 text(output1, 10,80, width-20, height-20);
 fill(255,255,255);
 text("flying on the ",10,120,width-20, height-20);
 fill(random(100,255),random(100,255),random(100,255));
 var output2 =
 lexicon.randomWord("jj") + " " +
    lexicon.randomWord("nn") + ". ";
 text(output2, 10,160, width-20, height-20);
}

