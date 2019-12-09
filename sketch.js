function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('display', 'block');
	noLoop();
	centerX = windowWidth/2;
	centerY = windowHeight/2;
	rectMode(CENTER);

	bg = Math.floor(Math.random() * 255); //random background shade, for fun!

	answers = []; //Might not use?

	q = ["Hi! Welcome to Rylie Johnson's EGR101 project! This \"game\" will take you through what I envision for my future as an engineer. You'll be presented with a scenario, and two choices. Neither choice is \"right\" or \"wrong\", but one of them is closer to MY definition of a successful engineer. This is a touchscreen, so you can just tap your choice! If you aren't using a touchscreen computer, clicking will work too :)"];
	//a = ["You shouldn't see this."];
	//b = ["You shouldn't see this."];

	part = 0;
	splash = 1;	
	i = 0;

	taps = 0;
}

//make this program repeat for use over and over in class! Fix part 0 bug.
//when correct answer is tapped, turn on loop() and color the answer they chose.

function touchStarted() {
	taps++; //just keeping track of how many times the screen has been tapped.

	checkPart();

	return false; //necessary to prevent default behavior
}

function checkPart() {
	//if, say, we're at the beginning, just go ahead to the next part.
	//if we're inside a part with many steps, increase i.

	switch (part) {
		case 0:
			q = ["Hi! Welcome to Rylie Johnson's EGR101 project! This \"game\" will take you through what I envision for my future as an engineer. You'll be presented with a scenario, and two choices. Neither choice is \"right\" or \"wrong\", but one of them is closer to MY definition of a successful engineer. This is a touchscreen, so you can just tap your choice! If you aren't using a touchscreen computer, clicking will work too :)"];
			//a = ["You shouldn't see this."];
			//b = ["You shouldn't see this."];
				splash = 1;
				part++;
				i = 0;
				checkPart();
			break;

		case 1:
			if (i > 0) {
				splash = 0; //turns off the splash once we've displayed the part 1 splash.
			} 

			q = ["Part 1: What does it mean to be a successful engineering student?",
			"I’ve finally started at the UK college of Engineering! It’s all really exciting; I can't wait for what's ahead! But first... I have to pass this calculus class.",
			"It's the end of class, and your groupmates are discussing hanging out together afterwards. You'd planned on just going back to the dorm and chilling out, but they invite you to join them.",
			"Woohoo! We’ve finally gotten through exams, and my friends want to celebrate. I have this one last project due Monday, though, and I’ve hardly started."];

			a = ["Holder text: you shouldn't see this.",
			"I’ve already taken this class, I feel pretty confident! I'll just wing it.",
			"I'm pretty tired right now, and we've never spent time together outside class - what if it's weird? I'll just head back alone to relax.",
			"I should relax! I’ll go out and party with my friends, I’ll find the time to finish the project."];

			b = ["Holder text: you shouldn't see this.",
			"I’ll brush up on the material just to be safe.",
			"I'm pretty tired, but we always have so much fun together in class! I'll make myself go out and join them!",
			"I’ll work on the project first. I can chill out once I’ve finished everything."];

			if (i === q.length) {
				splash = 1; //when we're about to move to the next part, this turns on splash in preparation.
				part++;
				i = 0;
				checkPart();
			}
			break;

		case 2:
			if (i > 0) {
				splash = 0;
			}

			q = ["Part 2: What is your \"road map\" for becoming a successful engineer?",
			"I'm noticing that I have more and more free time opening up. How am I going to spend it?",
			"I'm moving out of the dorms and finally getting my own place... I want to try and avoid loans, so how am I going to pay for it?",
			"It's about time to be worrying about engineering internships and jobs, but where am I going to find a good position?"];

			a = ["Holder text: you shouldn't see this.",
			"Finally, I have some more time for relaxing! I can just play video games, or spend more time with friends.",
			"I'll look for some simple desk job; I don't want to spend too much energy on work, or I'll burn myself out.",
			"I can look online, I guess. There's plenty of websites for that kind of thing."];

			b = ["Holder text: you shouldn't see this.",
			"This is a good chance for me to work on my personal projects! I'm gonna finally look into machine learning.",
			"I should think about some kind of STEM-related job, like being a TA for an engineering class! That'll be more fulfilling.",
			"There's an engineering fair coming up - I should start there! I can see what each company is all about, and if they're a good fit for me."];

			if (i === q.length) {
				splash = 1;
				part++;
				i = 0;
				checkPart();
			}
			break;

				

		case 3:
			if (i > 0) {
				splash = 0;
			}

			q = ["Part 3: How do you define what it means to be a successful engineer?",
			"There's been talk about a weird new code library that I don't really quite understand.",
			"I'm not quite sure about the ethics of this project. I'm really not comfortable with the way this is being done; I think it's not right.",
			"I'm a bit worried about how I've been doing as a programmer lately. Have I been slacking off or stagnating?"];

			a = ["Holder text: you shouldn't see this.",
			"I should look into it. Never hurts to stay on the cutting edge, plus I might find it interesting.",
			"Well, I have to feed myself, and I don't want to stir the pot. I'll keep my head down and get finished with this as fast as I can.",
			"I shouldn't be so harsh on myself. Yeah, I've been cutting corners, but that's okay! I'm just taking it easy."];

			b = ["Holder text: you shouldn't see this.",
			"I know I'm not going to use it for this job; no need to waste my time. I should be focused on what I DO use.",
			"I can't stand for this. I'm going to call out these issues, and if they won't change then I may have to leave the project.",
			"I know I haven't been working to the best of my ability. I can do better than this."];

			if (i === q.length) {
				splash = 1;
				part++;
				i = 0;
				checkPart();
			}
			break;

		case 4:
			if (i > 0) {
				splash = 0;
			}

			q = ["Part 4: What do you want to do as a successful engineer?",
			"What's work like for you? How do you feel about it?",
			"What are the projects you're working on like?",
			"Okay, but what field do you actually work in? Is it just a bunch of computer stuff?"];

			a = ["Holder text: you shouldn't see this.",
			"It's exhausting, but it pays the bills. I do everything that's asked of me, and not much more.",
			"We do a lot with data. Think of Google or Facebook collecting data on its users - there's so much that can be done with all of that!",
			"Yeah, I'm working 24/7 with computer science theory. I'm devoted to machine learning algorithms; our future is headed towards things like self-driving cars and smart assistants!"];

			b = ["Holder text: you shouldn't see this.",
			"It's not easy, but I really enjoy it! I'm always trying to find ways to get better.",
			"We're experimenting with new data compression methods! Hopefully it's gonna help a lot of people.",
			"Nope! I actually have a huge passion for chemistry. I specialize in computational physical chemistry, modelling the universe at a fundamental level!"];

			if (i === q.length) {
				splash = 1;
				part++;
				i = 0;
				checkPart();
			}
			break;

		case 5:
			q = ["You've reached the end of all the scenarios! Now, I'll actually explain what I would have chosen at each part, and what engineering really means to me.",
			"Part 1: What does it mean to be a successful engineering student?\n Working hard in school is really important to me. I struggle a lot with having good study skills, and one of my goals is to change that! However, I can't get too obsessed with school. I'm happier when I get to spend time with my friends, and I want to keep making new ones! Balancing work and play is important. I want to be able to take care of myself while getting everything done. I also want to use my time as a student to explore myself and all the different things engineering has to offer. Hopefully, I'll be able to find my niche both personally and professionally.",
			"Part 2: What is your \"road map\" for becoming a successful engineer?\n I want to spend time working on all kinds of personal projects. Not only is it fun, but I'll also be improving as a programmer. I'll be looking into jobs pretty soon, and I want to work in some STEM field. It'll be likely to interest me more, and it'll help me when I graduate and look for a full-time gig! I'm also going to look into internships and networking. That way, I'll know about everything that's available to me, and they'll be thinking of me when it comes time to hire.",
			"Part 3: How do you define what it means to be a successful engineer?\n I think successful engineers never stop learning. It helps you do better in your field, it keeps you engaged, and it's just fun! More importantly, though, a successful engineer HAS to stand up for what's right. I won't be able to go to bed if I know that my work has hurt or taken advantage of people, and any decent engineer will refuse to let that happen. Overall, a successful engineer is always pushing themselves to be better. I want to do that through learning constantly, and only doing work that will benefit the world, never hurt it.",
			"Part 4: What do you want to do as a successful engineer?\n No matter where I end up, I want to enjoy my work. I want to look forward to work each day, and I want to finish each day satisfied, not exhausted. I also want to help people as much as possible. I know computer science isn't the most direct field to help people in, but any way that I can brighten someone else's day will brighten my own. Finally, I want to help advance the scientific world; it's a huge dream of mine to discover or pioneer something groundbreaking. My true love is really physical chemistry, and I want to use my skills in computer science to answer our biggest questions about it.",
			"That's all! Thank you for looking at my project :) Please tap or click to reset."];


			//Delete the following?
			//	a = ["Holder text"];  
			//	b = ["Holder text"];

			if (i === q.length) {
				location.reload();
			}
			break;

		default:
	}
}




function touchEnded() {
	redraw();
	i++;
}

function draw() {
	background(bg);
	textFont("Courier New", 25);
	textAlign(CENTER, CENTER);

	if(splash) { //make the text here a variable
		rect(centerX, centerY, windowWidth*0.75, windowHeight*0.75) // Splash box
		text(q[i], centerX, centerY, (windowWidth*0.75)*0.8, windowHeight*0.6) //splash text
	} else {
		rect(centerX, centerY/2, windowWidth - 2*windowWidth/5, windowHeight/3) // Question box
		text(q[i], centerX, centerY/2, (windowWidth - 2*windowWidth/5)*0.8, windowHeight/2 - 200); // Question text

		rect(centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Answer 1 box
		text(a[i], centerX/2, 3*centerY/2, (windowWidth/3)*0.8, windowHeight/3); // Question text

		rect(3*centerX/2, 3*centerY/2, windowWidth/3, windowHeight/3); // Answer 2 box
		text(b[i], 3*centerX/2, 3*centerY/2, (windowWidth/3)*0.8, windowHeight/3); // Question text
	}	
}