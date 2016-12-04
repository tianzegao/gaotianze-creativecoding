var myData;
var jobidcol;
var jobidRow
function preload(){
  myData = loadTable('data/NYC_Jobs.csv',function(){
    println('loaded data');
  });
}
function setup() {
  createCanvas(500,500);
 jobidcol = myData.getColumn('Job ID');
  jobidRow = myData.getRow(1).arr;
  //println(jobidRow);
  //println(jobidcol.length);
  fill(255);
  for(var i=0; i<jobidRow.length; i++){
    text(jobidRow[i], 10, i*10);
    println(jobidRow[i]);
  }
}

function draw() {
  background(100);
  for(var i=0; i<jobidRow.length; i++){
    text(jobidRow[i], 10, i*10);
    //println(jobidRow[i]);
  }
  
}