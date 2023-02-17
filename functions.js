//trying to see if i can call a function from another
// js file into the main one so the code is less crowded

// I also use this file to temporarily draw the graphics before adding
// them to the  main game

//scenery
function scenery() {
  push();
  fill(118, 110, 223);
  rect(0, 0, width, height);

  strokeWeight(2);
  fill(110, 120, 110);
  rect(0, 500, width, height / 4);
  pop();
}
//skyscraper
function skyscraper() {
  push();
  strokeWeight(2);
  fill(80, 90, 90);
  rect(100, 100, 200, 400);
  fill(105, 130, 130);
  rect(200, 450, 30, 50);
  line(215, 450, 215, 500);
  fill(0, 0, 0);
  text("add windows later", 150, 200);
  pop();
}

scenery();
skyscraper();

//man with parachute
scale(1);
strokeWeight(3);

//parachute
fill(120, 90, 70);
rect(390, 230, 20, 30);

//head
fill(255, 255, 255);
ellipse(400, 200, 50, 50);

//body
line(400, 225, 400, 270);
line(400, 270, 390, 300);
line(400, 270, 410, 300);
