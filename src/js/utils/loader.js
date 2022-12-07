import { DefaultLoadingManager } from "three";
import gsap from "gsap";

const startButton = document.querySelector("#startButton");
const progressIndicator = document.querySelector("#progressIndicator");

/* On Start 
DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
	console.log(
		`Started loading file: ${url}.\n${itemsLoaded} of ${itemsTotal} files`
		);
		console.log(`${(itemsLoaded / itemsTotal) * 100}% loaded`);
	};
	*/

let loaderValue = 0;
DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
	loaderValue = (itemsLoaded / itemsTotal) * 100;
	progressIndicator.style.transform = `translateX(${loaderValue}%)`;
};

DefaultLoadingManager.onLoad = function () {
	console.log("Loading Complete!");
	const buttonTl = gsap.timeline({ defaults: { duration: 0.3 } });
	buttonTl.set(startButton, { display: "block" });
	buttonTl.fromTo(
		startButton,
		{ scale: 0, opacity: 0 },
		{ scale: 1, opacity: 1, delay: 0.3, duration: 0.3 }
	);
};
