let catcherX; // horizontal
const catcherY = 450; // vertical
const groundY = 475; // ground
let seedX;
let seedY = 0;
const seedSize = 30;
const seedSpeed = 5;
let seedIsFalling = false;

function setup() {
  createCanvas(500, 500);
  catcherX = width / 2; // creates start position for catcher
  seedX = random(width);
}

function draw() {
  background(220);
  drawGround(); // draw the ground rectangle
  drawCatcher(); // draw the catcher sprite
  updateCatcher(); // update the catcher position based on the mouse movement
  if (seedIsFalling) {
    drawSeed(); // draw the falling seed sprite
    updateSeed(); // update the seed position
    if (checkCollision()) {
      fill(255, 255, 0); // change fill color to yellow
    }
  } else {
    seedY = 0;
    seedX = random(width);
  }
}

function drawGround() {
  fill(165, 42, 42);
  rect(0, groundY, width, height - groundY);
}

function drawCatcher() {
  if (!checkCollision()) {
    fill(0, 0, 255); // default fill color
  }
  ellipse(catcherX, catcherY, 80, 80); // body
  ellipse(catcherX - 33, catcherY - 28, 20, 20); // left ear
  ellipse(catcherX + 33, catcherY - 28, 20, 20); // right ear
}

function updateCatcher() {
  const catcherSpeed = 10; // how fast the catcher moves
  catcherX = mouseX; // mouse controls position
}

function drawSeed() {
  fill(0, 255, 0);
  ellipse(seedX, seedY, seedSize, seedSize);
}

function updateSeed() {
  seedY += seedSpeed;
  if (seedY > groundY - seedSize / 2) {
    seedIsFalling = false;
  }
}

function checkCollision() {
  const distance = dist(catcherX, catcherY, seedX, seedY);
  const radiusSum = 80 / 2 + seedSize / 2;
  return distance < radiusSum;
}

function mousePressed() {
  if (!seedIsFalling) {
    seedIsFalling = true;
  }
}
