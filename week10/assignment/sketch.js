function setup() {
	createCanvas(400, 400)
	noStroke()
	colorMode(HSB, TWO_PI, 1, 1)
	backColor = color(1)
	
	setTimeout(()=>{
		backColor = color(0, 0, 1)
	}, 5000)
	
	setInterval(()=>{
		backColor = color(random(TWO_PI), 0.8, 0.8)
	}, 2000)
}



function draw() {
	background(backColor)
	
	for (var i = 0; i < 8; i ++) {
		if (i % 2 == 0) {
			fill(1)
		} else {
			fill(0)
		}
		diam = 400 - 40 * i
		ellipse(200 + 10 * sin(frameCount / 60 * i), 200, diam)
	}	
}

function mouseClicked() {
	saveCanvas('week10', 'png')
}