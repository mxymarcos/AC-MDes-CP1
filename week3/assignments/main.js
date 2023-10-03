const thumbnails = document.querySelectorAll('.thumbnail');
const largeImage = document.getElementById('largeImage');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

let currentImageIndex = 0;
let intervalId = null;
let isPlaying = true;

function showImage(index) {
	largeImage.src = `image${index + 1}.jpg`;
}

function nextImage() {
	currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
	showImage(currentImageIndex);
}

function play() {
	isPlaying = true;
	playButton.disabled = true;
	pauseButton.disabled = false;
	intervalId = setInterval(nextImage, 3000);
}

function pause() {
	isPlaying = false;
	playButton.disabled = false;
	pauseButton.disabled = true;
	clearInterval(intervalId);
}

thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener('click', () => {
		currentImageIndex = index;
		showImage(currentImageIndex);
	});
});

playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);

showImage(currentImageIndex);
play();
