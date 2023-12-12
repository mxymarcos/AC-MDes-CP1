let fishImg, player, icebergImg, rockImg, sharkImg 
let obstacles;
let gameOn = true;
let level = 0;
let levelTimer= 15;
let speed = 10;


function setup() {
	createCanvas(windowWidth, windowHeight);
	fishImg = loadImage("fish.png")
	icebergImg = loadImage("iceberg.png")
	rockImg = loadImage("rock.png")
	sharkImg = loadImage("shark.png")
	player = createSprite(100, height/2);
	player.addImage(fishImg);
	player.scale -= 0.65;
	
	obstacles = new Group();
	
	setInterval(() => {
		generateObstacles();
	
	}, 2000);
	
	setInterval(() => {
		generatesharks();
	}, 10000);
	levelUp();
}

function draw() {
	background(75, 126, 187);
	if (keyIsDown( 38 ) &&  player.position.y > player.height/2){
		player.position.y -= 10;
	} else if (keyIsDown(40) && player.position.y < height - player.height/2) {
		player.position.y += 10;
	}
	// check for collision
	if (obstacles.overlap(player)){
		gameOn = false;
	}
	if (gameOn) {
		drawSprites();
		fill(0);
		textSize(30)
		textAlign(CENTER)
		text("Level:" + level, width/2,height/2)
	}else {
		fill(0);
		textSize(40)
		textAlign(CENTER)
	text("Game over.", width/2,height/2);
	}
}

function levelUp() {
	level = level + 1;
	levelTimer = levelTimer + 5;
	speed = speed + 5;
	setTimeout(() => {
		levelUp();
	}, levelTimer * 1000)
}

function generateObstacles(){
	let obstacle = createSprite(width,0)
	let topOrBottom = random(0, 1) < 0.5? "top" : "bottom";
	if(topOrBottom === "top") {
		obstacle.addImage(icebergImg);
		obstacle.scale += random(-0.2,0.05);
		obstacle.height *= obstacle.scale;
		obstacle.position.y = obstacle.height/2;
	
	} else {
		obstacle.addImage(rockImg);
		obstacle.scale += random(-0.2,0.05);
		obstacle.height *= obstacle.scale;
		obstacle.position.y = height - (obstacle.height/2);
	}
	
	obstacle.setSpeed(speed,180);
	obstacle.addToGroup(obstacles);
}

function generatesharks(){
	let shark = createSprite(width,height/2);
	shark.position.y += random(-150,150);
	shark.addImage(sharkImg);
	shark.setSpeed(speed * 1.5,180)
	shark.addToGroup(obstacles);
	shark.scale = (0.25)
	
}
