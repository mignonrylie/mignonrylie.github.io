function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	centerX = windowWidth/2;
	centerY = windowHeight/2;
	rectMode(CENTER);
	answers = [];

	q = ["Beginning!"];
	a = ["Start!"];
	b = ["Go!"];

	part = 0;
	splash = 1;
	i = 0;
}

function touchStarted() {
	if(splash) {
		splash = 0;
	}
	testx = touches[0].x;
	testy = touches[0].y;

	touchAction();
}

function touchEnded() {
	redraw();
}

function touchAction() {
	//Calulates the 'answer'.
	

	if ((testx > (centerX/2 - windowWidth/6)) && testx < (centerX/2 + windowWidth/6) && testy < (3*centerY/2 + windowHeight/6) && testy > (3*centerY/2 - windowHeight/6)) {
		//left: centerX/2 - windowWidth/3
		//right: centerX/2 + windowWidth/3
		//up: 3*centerY/2 + windowHeight/3
		//down:  3*centerY/2 - windowHeight/3
		answers.push("A");
		
	} else if ((testx > (3*centerX/2 - windowWidth/6)) && testx < (3*centerX/2 + windowWidth/6) && testy < (3*centerY/2 + windowHeight/6) && testy > (3*centerY/2 - windowHeight/6)) {
		//left: 3*centerX/2 - windowWidth/3
		//right: 3*centerX/2 + windowWidth/3
		//up: 3*centerY/2 + windowHeight/3
		//down:  3*centerY/2 - windowHeight/3
		answers.push("B");
	}

	//determines when to move to the next part.
	switch (part) {
		case 0:
			part++;
			break;
		case 1:
			//text for part 1
			q = ["I’ve finally started at the UK college of Engineering! It’s all really exciting; I dream about all the possibilities that lie ahead! But first... I have to pass this calculus class.",
			"Woohoo! We’ve finally gotten through midterms, and my friends want to celebrate. I have this one last project due Monday, though, and I’ve hardly started."];
			a = ["I’ve already taken this class, I feel pretty confident!",
			"I should relax! I’ll go out and party with my friends, I’ll find the time to finish the project."];
			b = ["I’ll brush up on the material just to be safe.",
			"I’ll work on the project first. I can chill out once I’ve finished everything."];
			//Level 1: Successful student.
	// -	(Be able to grow personally at the same time as I learn academically.)
	// -	(Exploring all kinds of different things, being open minded, and maybe finding my niche.)
			//only increase if ready
			break;
		case 2:
			//text for part 2
			q = [];
			a = [];
			b = [];
			// Level 2: Road map to becoming an engineer.
// -	Keep practicing programming. Learn about the new techniques I’m interested in. Work on personal projects for the sake of learning and fun. 
// -	Get a job and learn how to be more independent. Try to get a job in a STEM-related field, like tutoring or being a TA; it’ll be relevant and I’ll enjoy it more. 
// -	Keep my engineering friends and make even more along the way.
			//only increase if ready
			break;
		case 3:
			//text for part 3
			q = [];
			a = [];
			b = [];
			// Level 3: What a successful engineer is!
// -	I want to be happy and fulfilled; feel like I’m making a difference. 
// -	Do work that matters and that I enjoy. Be important to society, not to a company. 
// -	Always be learning something new.
// -	ALWAYS DO THE RIGHT THING!!!!
			//only increase if ready
			break;
		case 4:
			//text for part 4
			q = [];
			a = [];
			b = [];
			// Level 4: What I want to do as a successful engineer!
// -	Have fun writing programs. 
// -	Create software that helps people out. Keep learning. 
// -	Help advance the field of either machine learning or quantum computing. 
// -	Finish work happy, not exhausted.
			//only increase if ready
		case 5:
			//ending
	}

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
		text(a[i], centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Question text

		rect(3*centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Answer 2 box
		text(b[i], 3*centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Question text
	}	
}