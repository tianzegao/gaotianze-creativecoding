
  var lexicon;
  var couplet = "This is the first translation of the Hammurabi's code made into English";
  var words = [];
  var partsOfSpeech = [];
  var newSpeech=[];
  var newSentence=[];
  var newSentenceString;

  function setup() {
  words = RiTa.tokenize(couplet);
  partsOfSpeech = RiTa.getPosTags(words);
  for(var i=0; i<partsOfSpeech.length;i++){
    if(partsOfSpeech[i] != null){
      newSpeech.push(partsOfSpeech[i]);
    }
  }
  createCanvas(800,800);
  lexicon = new RiLexicon();
  textSize(20);
  textAlign(CENTER, CENTER);
  textAlign(LEFT, TOP);
   for(var i=0; i<newSpeech.length; i++){
    newSentence.push(lexicon.randomWord(newSpeech[i]));
  }
  //newSentenceString = newSentence.join(‘ ’);
  generateHaiku();
}

function mousePressed(){
  generateHaiku();
}

function generateHaiku(){
  //newSentenceString = newSentence.join(‘,’);
  
  var output =
    couplet + "\n" + "\n" +
    newSentence + "\n" + "\n" +
    //first line, 5 syllables
    lexicon.randomWord(newSpeech[0], 1) + " " + 
    lexicon.randomWord(newSpeech[1], 2) + " " +
    lexicon.randomWord(newSpeech[2], 2) + "\n" +

    //second line, 7 syllables
    lexicon.randomWord(newSpeech[3], 2) + " " +
    lexicon.randomWord(newSpeech[4], 2) + " " +
    lexicon.randomWord(newSpeech[5], 3) + "\n" +
    
    //third line, 5 syllables
    lexicon.randomWord(newSpeech[6], 1) + " " +
    lexicon.randomWord(newSpeech[7], 2) + " " +
    lexicon.randomWord(newSpeech[8], 2);
  background(255);
  text(output, 10, 10, width-20, height-20);
}
      