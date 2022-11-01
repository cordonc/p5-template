function setup() {
  createCanvas(800, 800);
}

let noiseScale=0.0;
function draw() {
  background(234, 229, 218);
  // ATTEMPT 1

  // Grid Code

  noiseScale += 0.05;

  for (var x = 0; x < width; x += width / 17) {
    for (var y = 0; y < height; y += height / 9) {
      let noiseVal = noise(mouseX * noiseScale, mouseY * noiseScale);
      stroke(noiseVal * 250);
      strokeWeight(0.75);
      line(
        x,
        mouseY + noiseVal * random(60, 80),
        x,
        mouseX + noiseVal * random(60, 80)
      );
      line(
        mouseX + noiseVal * random(60, 80),
        y,
        mouseY + noiseVal * random(60, 80),
        y
      );
      }
pop();
    
    //Circle Code
    let rows = height / 9;
    let col = width / 17;

    for (row = 0; row < rows; row++) {
      for (col = 0; col < rows; col++) {
        drawThing(col * 50 + 25, row * 50 + 25);

        // line(x, 0, x, height);
        // line(0, y, width, y);
      }
    } 
   
  }
}
  

  function drawThing(x, y) {
    let radius = random(0, 50);
    ellipse(x, y, radius, radius);
  }

  // Define the curve points as JavaScript objects
  // let p1 = { x: 600, y: 100 };
  // let p2 = { x: 625, y: 450 };
  // let p3 = { x: 400, y: 470 };
  // let p4 = { x: 350, y: 350 };
  // let p5 = { x: 425, y: 250 };
  // let p6 = { x: 600, y: 100};

  // let t = map(mouseX, 0, width, -1, 1);
  // curveTightness(t);
  // fill("black");
  // beginShape(noiseNum);
  // // stroke(0*noiseNum);
  // curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  // // stroke(0*noiseNum);
  // curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  // // stroke(0*noiseNum);
  // curve(p2.x, p2.y, p2.x, p2.y, p4.x, p4.y, p5.x, p5.y);

  // curve(p2.x, p2.y, p3.x, p3.y, p5.x, p5.y, p6.x, p6.y);
  // endShape();
  // }

