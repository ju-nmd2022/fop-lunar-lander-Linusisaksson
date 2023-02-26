//State of games

let state = "start";
let manY = 100;
let speed = 1;
let acceleration = 0.2;

//backround graphics/scenery functions for the game
function setup() {
  createCanvas(700, 600);
  background(255, 255, 255);
}

function man(manX, manY, size) {
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

  //   head;
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

  //head blowing air
  //   fill(255, 255, 255);
  //   ellipse(manX, manY, 50 * size, 50 * size);
  //   push();
  //   fill(0, 0, 0);
  //   noStroke();
  //   ellipse(manX - 13 * size, manY - 10 * size, 8 * size);
  //   ellipse(manX + 3 * size, manY - 15 * size, 20 * size);
  //   pop();

  //   push();
  //   strokeWeight(1);
  //   stroke(255, 255, 255);
  //   line(manX - 5 * size, manY - 30 * size, manX - 10 * size, manY - 50 * size);
  //   line(manX, manY - 31 * size, manX - 3 * size, manY - 50 * size);
  //   line(manX + 4 * size, manY - 31 * size, manX + 6 * size, manY - 50 * size);
  //   line(manX + 9 * size, manY - 30 * size, manX + 13 * size, manY - 50 * size);
  //   pop();

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

function StartScreen() {
  background(255, 200, 100);
  text("To start game press space", 100, 100);
  //   console.log("startscreen is active");
}

//all code that is run when game is active
function GameScreen() {
  text("game is running", 200, 200);
  console.log(state);
}
//code that is run when you win
function WinScreen() {
  background(255, 255, 0);
  text("you win", 250, 250);
  console.log(state);
}
//code that is run when you lose
function LoseScreen() {
  background(255, 50, 0);
  text("you lose 💀", 300, 300);
  console.log(state);
}
// StartScreen();
// GameScreen();
// WinScreen();

function draw() {
  if (state === "start") {
    StartScreen();
  } else if (state === "game") {
    GameScreen();
  } else if (state === "win") {
    WinScreen();
  } else if (state === "lose") {
    LoseScreen();
  }
}

function keyPressed() {
  console.log(keyCode);
  if (state === "start" && keyCode === 32) {
    state = "game";
    // console.log("game");
  }
}
