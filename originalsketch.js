function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	centerX = windowWidth/2;
	centerY = windowHeight/2;
	rectMode(CENTER);
	level = 0;
	beginning = 1;
	end = 0;
	answers = [];

	i = 0;
	q = ["Welcome to my project! Tap anywhere on the screen to begin."];

	part = 0;
	splash = 1;
}

function levelOne() {
	part = 1;

	i = 0;

	q = ["I’ve finally started at the UK college of Engineering! It’s all really exciting; I dream about all the possibilities that lie ahead! But first... I have to pass this calculus class.",
	"Woohoo! We’ve finally gotten through midterms, and my friends want to celebrate. I have this one last project due Monday, though, and I’ve hardly started."]
	
	a1 = ["I’ve already taken this class, I feel pretty confident!",
	"I should relax! I’ll go out and party with my friends, I’ll find the time to finish the project."];
	
	a2 = ["I’ll brush up on the material just to be safe.",
	"I’ll work on the project first. I can chill out once I’ve finished everything."];

	level = 1;

	redraw();

	//Level 1: Successful student.
	// -	(Be able to grow personally at the same time as I learn academically.)
	// -	(Exploring all kinds of different things, being open minded, and maybe finding my niche.)
	
}

function levelTwo() {
	i = 0;

	q = ["We've reached level two! We're going to look more at the road map to becoming an engineer."];

	a1 = ["Ok"];

	a2 = ["Thanks"];

	redraw();
// Level 2: Road map to becoming an engineer.
// -	Keep practicing programming. Learn about the new techniques I’m interested in. Work on personal projects for the sake of learning and fun. 
// -	Get a job and learn how to be more independent. Try to get a job in a STEM-related field, like tutoring or being a TA; it’ll be relevant and I’ll enjoy it more. 
// -	Keep my engineering friends and make even more along the way.
}

function levelThree() {
	i = 0;

	q = [];

	a1 = [];

	a2 = [];

	redraw();

// Level 3: What a successful engineer is!
// -	I want to be happy and fulfilled; feel like I’m making a difference. 
// -	Do work that matters and that I enjoy. Be important to society, not to a company. 
// -	Always be learning something new.
// -	ALWAYS DO THE RIGHT THING!!!!
}



function levelFour() {
// Level 4: What I want to do as a successful engineer!
// -	Have fun writing programs. 
// -	Create software that helps people out. Keep learning. 
// -	Help advance the field of either machine learning or quantum computing. 
// -	Finish work happy, not exhausted.
}



function keyPressed() {
	switch(keyCode) {
		case LEFT_ARROW:
			answers.push("A");
			i++;
			redraw();
			break;
		case RIGHT_ARROW:
			answers.push("B");
			i++;
			redraw();
			break;
		default:
	}
}

function touchStarted() {
	if (splash) {
		splash = 0;
		if (part = 0) {
			levelOne();
		}
	} else {
		calcAnswer();
	}
	return false;
	redraw();
}

function calcAnswer() {
	testx = touches[0].x;
	testy = touches[0].y;
	if ((testx > (centerX/2 - windowWidth/6)) && testx < (centerX/2 + windowWidth/6) && testy < (3*centerY/2 + windowHeight/6) && testy > (3*centerY/2 - windowHeight/6)) {
		//left: centerX/2 - windowWidth/3
		//right: centerX/2 + windowWidth/3
		//up: 3*centerY/2 + windowHeight/3
		//down:  3*centerY/2 - windowHeight/3
		answers.push("A");
		if (i === q.length - 1) {
			nextLevel();
		} else {
			i++;
		}
	} else if ((testx > (3*centerX/2 - windowWidth/6)) && testx < (3*centerX/2 + windowWidth/6) && testy < (3*centerY/2 + windowHeight/6) && testy > (3*centerY/2 - windowHeight/6)) {
		//left: 3*centerX/2 - windowWidth/3
		//right: 3*centerX/2 + windowWidth/3
		//up: 3*centerY/2 + windowHeight/3
		//down:  3*centerY/2 - windowHeight/3
		answers.push("B");
		if (i === q.length - 1) {
			nextLevel();
		} else {
			i++;
		}
	}
}

function nextLevel() {
	switch(level) {
		case 1:
			levelTwo();
			break;
		case 2:
			levelThree();
			break;
		case 3:
			levelFour();
			break;
		default:
	} 
	level++;
}



function draw() {
	background(50);
	textFont("Courier New", 25);
	textAlign(CENTER, CENTER);

	if(splash) { //make the text here a variable
		rect(centerX, centerY, windowWidth*0.75, windowHeight*0.75) // Splash box
		text(q[i], centerX, centerY, windowWidth*0.75, windowHeight*0.75) //splash text
	} else {
		rect(centerX, centerY/2, windowWidth - 2*windowWidth/5, windowHeight/3) // Question box
		text(q[i], centerX, centerY/2, windowWidth - 2*windowWidth/5, windowHeight/2 - 200); // Question text

		rect(centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Answer 1 box
		text(a1[i], centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Question text

		rect(3*centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Answer 2 box
		text(a2[i], 3*centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Question text
	}	
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}