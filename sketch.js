function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');

  x = 1;
  numPlants = 20;
  
  bases = [];
  greens = [];
  heights = [];
  reds = [];
  greenies = [];
  blues = [];
  wiggles = [];
  speed = 1;
  goalSpeed = speed;
  party = 0;
  
  wiggleStrength = 5;
  goalwiggleStrength = wiggleStrength;
  
  for(let i = 0; i < numPlants; i++) {
    bases[i] = windowWidth/numPlants*i + random(-25,25);
    greens[i] = random(50, 200);
    heights[i] = random(1, 0.8*windowHeight);
    reds[i] = random(50, 255);
    greenies[i] = random(50, 255);
    blues[i] = random(50,255);
    wiggles[i] = random(0.5,1.5);
  }
  
  
}

function draw() {
  background(100, 190, 220);
  
  noStroke();
  fill(0, 200, 0);
  
  wiggleStrength = lerp(wiggleStrength, goalwiggleStrength, 0.05);
  
  for(let i = 0; i < numPlants; i++) {
    for(y = windowHeight; y > heights[i]; y = y - 3) {
        fill(0, greens[i], 0);
      circle(bases[i] + wiggleStrength*sin(0.1*(x+y)*wiggles[i]), y, 20);
    }
    
    if(party) {
      fill(random(0, 255), random(0, 255), random(0, 255))
    } else {
      fill(reds[i], greenies[i], blues[i]);
    }
    circle(bases[i] + wiggleStrength*sin(0.1*(x+y)*wiggles[i]), y, 40);
  }
  
  

  stroke(0);
  strokeWeight(5);
  fill(255);
  textSize(20);
  text("happy plants", 70+(5*sin(0.23*x)), 150+(5*sin(0.13*x)))
  
  textSize(40);
  text("they're vibin", 100+(5*sin(0.2*x)), 200+(5*sin(0.1*x)))

  speed = lerp(speed, goalSpeed, 0.05);
  x = x + speed
}

function touchStarted() {
  goalwiggleStrength = wiggleStrength*2;
  goalSpeed = 2;
  party = 1;
  return false;
}

function touchEnded() {
  goalwiggleStrength = goalwiggleStrength/2;
  goalSpeed = 1;
  party = 0;
  return false;
}