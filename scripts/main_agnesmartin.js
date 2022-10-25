

function setup() {
    createCanvas(windowWidth * 0.5, windowHeight * 1);
}

function draw() {
    background(234, 229, 218);
	noLoop();

	



noStroke();
	
	// grey box
	let greyColor = color(random(120, 135), 122, (100, 125), 200);
		fill(greyColor);
		rect(285, 550, 475, 235, 2, 2);
		scale(random(.45, 2));
	let whiteColor = color(random(220, 240), 212, random(175, 195), 200);
	//bottom box
		fill(whiteColor);
		rect(100, 750, 600, 125, 2, 2,);
		scale(random(0.5, 1.5));

		
	//black box
		fill(0, 0, 0, 220);
    	rect(450, 35, 40, 900, 2, 2);
		scale(random(0.35, 1.15));

	let redColor = color(random(200, 300), random(28, 48), 28, 200);
	//red box
		fill(redColor);
		rect(200, 615, 120, 85, 2, 2,);
		scale(random(0.15, 1));

	//white box
		fill(whiteColor);
    	rect(250, 250, 100, 400, 2, 2);
		scale(random(0.35, 1.25));

	
}


    





/* ATTEMPT 3
// for (var x = 0; x < width; x += width / 17) {
// 	for (var y = 0; y < height; y += height / 9) {
// 		stroke(0);
// 		strokeWeight(.75);
// 		line(x, 0, x, height);
// 		line(0, y, width, y);
// 	}
// }


// }

//ATTEMPT 2
// noStroke();
// let rect1;
//     rect(450, 35, 40, 850, 2, 2);
//     fill(color("black"));
//     rect(250, 250, 100, 400, 2, 2);
//     fill(color("white"));

// ATEMPT 1
//     // line(x1, y1, x2, y2)
//     // x1 = x-coordinate of the first point
//     // y1 = the y-coordinate of the first point
//    // x2 = the x-coordinate of the second point
//    // y2 = the y-coordinate of the second point

//     line(150, 75, 600, 75);
//     strokeWeight(1);
*/
