var space;
var space1;
var space2;
var space3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  space = createVideo(['movie/the_vampire_aboard_ship.mp4']);
  space1 = createVideo(['movie/things_to_come.mp4']);
  space2 = createVideo(['movie/unmasking_scene.mp4']);
  space3 = createVideo(['movie/execution_of_mussolini.mp4']);
  space.loop();
  space1.loop();
  space2.loop();
  space3.loop();
  space.size(300,200);
  space1.size(300,200);
  space2.size(300,200);
  space3.size(300,200);
  space.hide(); 
  space1.hide();
  space2.hide(); 
  space3.hide();
  //space.volume(0);//we set the volume to 0 because we don't want
                  //sound
}

function draw() {
  background(150);
  image(space,width/2-space.width,height/2-space.height); // draw the video frame to canvas
  image(space1,width/2-space.width,height/2);
  image(space2,width/2,height/2-space.height);
  image(space3,width/2,height/2);
  text("the vampire aboard ship",135,115)
  text("time :" + space.time(),135,130);
  text("duration :" + space.duration(),135,145);
  text("things to come",width-250,115);
  text("time :" + space1.time(),width-250,130);
  text("duration :" + space1.duration(),width-250,145);
  text("unmasking_scene",150,height-165);
  text("time :" + space2.time(),150,height-150);
  text("duration :" + space2.duration(),150,height-135);
  text("execution of mussolini",width-250,height-165);
  text("time :" + space3.time(),width-250,height-150);
  text("duration :" + space3.duration(),width-250,height-135);
}