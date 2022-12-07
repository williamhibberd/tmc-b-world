import { DefaultLoadingManager } from "three";
import gsap from "gsap";
import { init } from "./functions";

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
	console.log(`loading file: ${url}.\n${itemsLoaded} of ${itemsTotal} files`);
	loaderValue = (itemsLoaded / itemsTotal) * 100;
	progressIndicator.style.transform = `translateX(${loaderValue}%)`;
};

DefaultLoadingManager.onLoad = function () {
	console.log("Loading Complete!");
	setTimeout(() => {
		loadInAnimation();
	}, 1000);
	// const buttonTl = gsap.timeline({ defaults: { duration: 0.3 } });
	// buttonTl.set(startButton, { display: "block" });
	// buttonTl.fromTo(
	// 	startButton,
	// 	{ scale: 0, opacity: 0 },
	// 	{ scale: 1, opacity: 1, delay: 0.3, duration: 0.3 }
	// );
};

// /*
// 	! Intro / Splash
// */
const loadingEl = document.querySelector("#loader");
startButton.addEventListener("click", () => {
	loadInAnimation();
});
function loadInAnimation() {
	const loadInTl = gsap.timeline({
		onComplete: () => init(), //! only needed if using video
		defaults: { duration: 0.5, ease: "power4.out" },
	});
	loadInTl.to(".loader-shape", { opacity: 0 });
	loadInTl.to(startButton, { scale: 0, opacity: 0 }, "<");
	loadInTl.to("#loaderTitle", { scale: 0, opacity: 0 }, "<");
	loadInTl.to(loadingEl, { backgroundColor: "#000" }, "<");
	loadInTl.to(loadingEl, { opacity: 0 });
	loadInTl.set(loadingEl, { display: "none", duration: 0 });
}
