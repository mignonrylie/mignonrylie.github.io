function setup() {
	createCanvas(windowWidth, windowHeight);
	print(windowWidth);
	noLoop();
	centerX = windowWidth/2;
	centerY = windowHeight/2;
	rectMode(CENTER);


	p5.board();
	
	// serial = p5.serial();
	// serial.list()

	// b = p5.board('COM3', 'arduino');
	// pin = b.pin(9, 'DIGITAL', 'OUTPUT');
	// pin.write('HIGH');
	levelOne();

}

function mousePressed() {
	pin.write('HIGH');
}


function draw() {
	background(50);
	textFont("Courier New", 25);
	textAlign(CENTER, CENTER);


	// TODO: Add "splash screen", require interaction to enter the first level


	rect(centerX, centerY/2, windowWidth - 2*windowWidth/5, windowHeight/3) // Question box
	text(q[i], centerX, centerY/2, windowWidth - 2*windowWidth/5, windowHeight/2 - 200); // Question text

	rect(centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Answer 1 box
	text(a1[i], centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Question text

	rect(3*centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Answer 2 box
	text(a2[i], 3*centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Question text
}

function levelOne() {
	i = 0;

	q = ["I’ve finally started at the UK college of Engineering! It’s all really exciting; I dream about all the possibilities that lie ahead! But first... I have to pass this calculus class.",
	"Woohoo! We’ve finally gotten through midterms, and my friends want to celebrate. I have this one last project due Monday, though, and I’ve hardly started."]
	
	a1 = ["I’ve already taken this class, I feel pretty confident!",
	"I should relax! I’ll go out and party with my friends, I’ll find the time to finish the project."];
	
	a2 = ["I’ll brush up on the material just to be safe.",
	"I’ll work on the project first. I can chill out once I’ve finished everything."];

	//function to blink light and maybe store good v bad answers?
	//splash screen?

	//Level 1: Successful student.
	// -	(Be able to grow personally at the same time as I learn academically.)
	// -	(Exploring all kinds of different things, being open minded, and maybe finding my niche.)
	if (i === q.length - 1) {
		levelTwo();
	}
}

function levelTwo() {
	i = 0;

	q = [];

	a1 = [];

	a2 = [];

	if (i === q.length - 1) {
		levelThree();
	}
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

	if (i === q.length - 1) {
		levelFour();
	}

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
			answer = 1
			//lightUp()
			i++;
			redraw();
			break;
		case RIGHT_ARROW:
			answer = 2
			//lightUp()
			i++;
			redraw();
			break;
		default:
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}