function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  
  let one = createButton('add one');
  one.position(50, 50);
  one.mousePressed(One);
  
  let two = createButton('add two');
  two.position(50, 100);
  two.mousePressed(Two);
  
  value = 0;
}

function draw() {
  background(200);
  text(value, 200, 200);
}

function One() {
  value++;
}

function Two() {
  value += 2;
}  