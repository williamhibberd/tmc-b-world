import { DefaultLoadingManager } from "three";

const startButton = document.querySelector("#startButton");
const progressIndicator = document.querySelector("#progressIndicator");
const count = document.querySelector("#count");
let loaderValue = 0;

DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
	// console.log(
	// 	`Started loading file: ${url}.\n${itemsLoaded} of ${itemsTotal} files`
	// );
	console.log(`${(itemsLoaded / itemsTotal) * 100}% loaded`);
};

DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
	// console.log(`Loading file: ${url}.\n${itemsLoaded} of ${itemsTotal} files`);
	console.log(`${(itemsLoaded / itemsTotal) * 100}% loaded`);
	loaderValue = (itemsLoaded / itemsTotal) * 100;
	console.log(loaderValue);

	animateCountUp(count, 0, loaderValue);
};

DefaultLoadingManager.onLoad = function () {
	console.log("Loading Complete!");
	setTimeout(() => {
		startButton.style.display = "block";
	}, 1000);
};

// How long you want the animation to take, in ms
const animationDuration = 1000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration);
// An ease-out function that slows the count as it progresses
const easeOutQuad = (t) => t * (2 - t);

// The animation function, which takes an Element
const animateCountUp = (el, startNum, endNum) => {
	let frame = startNum;
	const countTo = endNum;
	// Animate bar
	progressIndicator.style.transform = `translateX(${endNum}%)`;
	// Start the animation running 60 times per second
	const counter = setInterval(() => {
		frame++;
		// Calculate our progress as a value between 0 and 1
		// Pass that value to our easing function to get our
		// progress on a curve
		const progress = easeOutQuad(frame / totalFrames);
		// Use the progress value to calculate the current count
		const currentCount = Math.round(countTo * progress);

		// If the current count has changed, update the element
		if (parseInt(el.innerHTML, 10) !== currentCount) {
			el.innerHTML = currentCount;
		}

		// If we’ve reached our last frame, stop the animation
		if (frame === totalFrames) {
			clearInterval(counter);
		}
	}, frameDuration);
};
