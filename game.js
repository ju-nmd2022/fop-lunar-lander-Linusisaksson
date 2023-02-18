//backround graphics/scenery functions for the game
function setup() {
  createCanvas(700, 600);
  background(255, 255, 255);
}
//State of games

let state = "start";

function StartScreen() {
  background(255, 200, 100);
  text("To start game press any key", 100, 100);
  //   console.log("startscreen is active");
}

//all code that is run when game is active
function GameScreen() {
  background(200, 200, 100);
  text("game is running", 200, 200);
  console.log("game is running");
}
//code that is run when you win
function WinScreen() {
  background(255, 255, 0);
  text("you win", 250, 250);
  console.log("winner");
}
//code that is run when you lose
function LoseScreen() {
  background(255, 50, 0);
  text("you lose 💀", 300, 300);
  console.log("loser");
}
// StartScreen();
// GameScreen();
// WinScreen();

function draw() {
  if (state === "start") {
    StartScreen();
    // if (state === "start" && keyIsDown(32)) {
    //   state === "game";
    //   console.log("game");
    // }
  } else if (state === "game") {
    GameScreen();
  } else if (state === "win") {
    WinScreen();
  } else if (state === "lose") {
    LoseScreen();
  }
}

function keyPressed() {
  state = "game";
}
