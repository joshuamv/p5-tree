
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	//big tree height
	var c = 220;
	//flower size
	var e = 2;
	background(0, 0, 20);

	// tree
	push();
	translate(0, height);
		push();
			translate(width / 2, 0);
			branch(c, e);
		pop();
	pop();
}

// my functions
function branch(len, idx) {

	// stop condition
	if (len < 35) {
		noStroke();
		fill(150, 250, 50, 255);
		ellipse(0, 0, idx, idx);
		return;
	}

	// draw the branch
	strokeWeight(max(1, len / 20));
	stroke(100, 250, 0, 60);
	push();
	line(0, 0, 0, -len);

	// move to the end of it
	translate(0, -len);

  // branch
	push();
	rotate(-noise(frameCount * 0.005, idx * 4) * 1.2);
	branch(
		len * ((0.0004*mouseX) + sin(idx * 0.00002, len * frameCount * 0.00001) * 0.54),
		idx + 2
	);
	pop();

  // branch
  push();
  rotate(noise(frameCount * 0.005, idx * 4) * 1.2);
  branch(
    len * ((0.0005*mouseX) + sin(idx * 0.00002, len * frameCount * 0.00001) * 0.54),
    idx + 1
  );
  pop();

  // branch
  push();
  rotate(-noise(frameCount * 0.005, idx * 3) * 1.6);
  branch(
    len * ((0.0005*mouseX) + sin(idx * 0.00002, len * frameCount * 0.00001) * 0.99),
    idx + 1
  );
  pop();

  // branch
  push();
  rotate(noise(frameCount * 0.005, idx * 4) * 0.7);
  branch(
    len * ((0.00051*mouseX) + sin(idx * 0.00003, len * frameCount * 0.00002) * 10),
    idx + 1
  );
  pop();

	// move back to root of this branch
	pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
