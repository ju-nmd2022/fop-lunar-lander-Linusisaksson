//trying to see if i can call a function from another
// js file into the main one so the code is less crowded

// I also use this file to temporarily draw
// the graphics before adding
// them to the  main game

let manY = 100;
let speed = 1;
let acceleration = 0.2;
//scenery
function setup() {
  createCanvas(700, 600);
  background(255, 255, 255);
}

function man(manX, manY, size, blowingAir) {
  //man with parachute
  push();
  strokeWeight(3 * size);

  //parachute
  push();
  noStroke();
  fill(120, 90, 70);
  rect(manX - 10 * size, manY + 30 * size, 20 * size, 30 * size);
  pop();
  push();
  strokeWeight(1.5);
  stroke(238, 196, 165);
  fill(255, 255, 255);
  line(manX - 10 * size, manY + 30 * size, manX - 30 * size, manY - 40 * size);
  line(manX - 10 * size, manY + 30 * size, manX - 20 * size, manY - 50 * size);
  line(manX + 10 * size, manY + 30 * size, manX + 20 * size, manY - 50 * size);
  line(manX + 10 * size, manY + 30 * size, manX + 30 * size, manY - 40 * size);
  pop();

  push();
  beginShape();
  fill(255, 0, 0);
  vertex(manX - 30 * size, manY - 40 * size);
  bezierVertex(
    manX - 30 * size,
    manY - 90 * size,
    manX + 30 * size,
    manY - 90 * size,
    manX + 30 * size,
    manY - 40 * size
  );
  bezierVertex(
    manX + 30 * size,
    manY - 60 * size,
    manX - 30 * size,
    manY - 60 * size,
    manX - 30 * size,
    manY - 40 * size
  );
  endShape();
  pop();

  if (blowingAir) {
    // head blowing air
    fill(255, 255, 255);
    ellipse(manX, manY, 50 * size, 50 * size);
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(manX - 13 * size, manY - 10 * size, 8 * size);
    ellipse(manX + 3 * size, manY - 15 * size, 20 * size);
    pop();

    push();
    strokeWeight(1);
    stroke(255, 255, 255);
    line(manX - 5 * size, manY - 30 * size, manX - 10 * size, manY - 50 * size);
    line(manX, manY - 31 * size, manX - 3 * size, manY - 50 * size);
    line(manX + 4 * size, manY - 31 * size, manX + 6 * size, manY - 50 * size);
    line(manX + 9 * size, manY - 30 * size, manX + 13 * size, manY - 50 * size);
    pop();
  } else {
    fill(255, 255, 255);
    ellipse(manX, manY, 50 * size, 50 * size);
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(manX - 7 * size, manY, 8 * size);
    ellipse(manX + 7 * size, manY, 8 * size);
    beginShape();
    vertex(manX - 10 * size, manY + 10 * size);
    bezierVertex(
      manX - 10 * size,
      manY + 20 * size,
      manX + 10 * size,
      manY + 20 * size,
      manX + 10 * size,
      manY + 10 * size
    );
    endShape();
    pop();
  }
  //   head;

  //   //body
  line(manX, manY + 25 * size, manX, manY + 70 * size);
  line(manX, manY + 70 * size, manX - 10 * size, manY + 100 * size);
  line(manX, manY + 70 * size, manX + 10 * size, manY + 100 * size);

  line(manX, manY + 40 * size, manX - 15 * size, manY + 45 * size);
  line(manX - 15 * size, manY + 45 * size, manX - 10 * size, manY + 30 * size);

  line(manX, manY + 40 * size, manX + 15 * size, manY + 45 * size);
  line(manX + 15 * size, manY + 45 * size, manX + 10 * size, manY + 30 * size);

  pop();
}
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
function draw() {
  scenery();
  skyscraper();
  man(400, manY, 0.4, keyIsDown(38));

  manY = manY + speed;
  speed = speed + acceleration;
  //   console.log(speed);

  if (keyIsDown(38)) {
    speed = speed - 0.5;
  }
  // manY is located in the center of the head so had to move up
  // the point of impact a few pixels
  if (manY >= 460 && speed > 3) {
    console.log("lose");
    speed = 0;
    acceleration = 0;
    acceleration = 0;
  } else if (manY >= 460 && speed < 3) {
    speed = 0;
    acceleration = 0;
    acceleration = 0;
    // console.log("win");
  }
}
