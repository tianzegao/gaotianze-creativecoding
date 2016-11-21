var wikisentence = "an Rutter, a stable boy, is admitted to a public school, wrong accent and all.";
var lexicon;
var words = [];
var partsOfSpeech = [];
var newSentence=[]
function setup() {
  createCanvas(400, 400);
   words = RiTa.tokenize(wikisentence);
  partsOfSpeech = RiTa.getPosTags(words);
  lexicon = new RiLexicon();
  textSize(20);
  textAlign(CENTER, CENTER);
  textAlign(LEFT, TOP);
  generateHaiku();
  for(var i=0; i<partsOfSpeech.length;i++)
  {
    newSentence=lexicon.randomWord(partsOfSpeech[i]);
  }
}

function mousePressed(){
  generateHaiku();
}



function generateHaiku(){
  
  var output =
    //first line, 5 syllables
    lexicon.randomWord("vb", 1) + " " + 
    lexicon.randomWord("jj", 2) + " " +
    lexicon.randomWord("nn", 2) + "\n" +

    //second line, 7 syllables
    lexicon.randomWord("vbg", 2) + " " +
    lexicon.randomWord("nn", 2) + " " +
    lexicon.randomWord("rb", 3) + "\n" +
    
    //third line, 5 syllables
    lexicon.randomWord("nns", 1) + " " +
    lexicon.randomWord("vbg", 2) + " " +
    lexicon.randomWord("nn", 2);
  background(255);
  text(output, 20, 20, width-20, height-20);
}