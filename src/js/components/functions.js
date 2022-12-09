import * as THREE from "three";
import { DefaultLoadingManager } from "three";
import gsap from "gsap";

import { camera, group, renderer, scene } from "./threeConstants";
import { controls } from "./controls";
import {
	lobby,
	library,
	outside,
	allHotSpots,
	breuerChairMesh,
	blueButton,
} from "./meshes";

/*
	! Loading
*/
/* Update loader */
let loaderValue = 0;
function updateProgress(url, itemsLoaded, itemsTotal) {
	console.log(`loading file: ${url}.\n${itemsLoaded} of ${itemsTotal} files`);
	loaderValue = (itemsLoaded / itemsTotal) * 100;
	progressIndicator.style.transform = `translateX(${loaderValue}%)`;
}

// ** Load in with button click insead of automatically
// !! will need to be turned into a function if used
// const buttonTl = gsap.timeline({ defaults: { duration: 0.3 } });
// buttonTl.set(startButton, { display: "block" });
// buttonTl.fromTo(
// 	startButton,
// 	{ scale: 0, opacity: 0 },
// 	{ scale: 1, opacity: 1, delay: 0.3, duration: 0.3 }
// );
// startButton.addEventListener("click", () => {
// 	loadInAnimation();
// });

/* Load in animation */
const startButton = document.querySelector("#startButton");
const loadingEl = document.querySelector("#loader");
function loadInAnimation(sceneHotspots) {
	const loadInTl = gsap.timeline({
		onComplete: () => animateHotspotsIn(sceneHotspots), //! only needed if using video
		defaults: { duration: 0.5, ease: "power4.out" },
	});
	loadInTl.to(".loader-shape", { opacity: 0 });
	loadInTl.to(startButton, { scale: 0, opacity: 0 }, "<");
	loadInTl.to("#loaderTitle", { scale: 0, opacity: 0 }, "<");
	loadInTl.to(loadingEl, { backgroundColor: "#000" }, "<");
	loadInTl.to(loadingEl, { opacity: 0 });
	loadInTl.set(loadingEl, { display: "none", duration: 0 });
}

/* Animate in hotspots */
function animateHotspotsIn(sceneHotspots) {
	for (const object of sceneHotspots) {
		gsap.to(object.scale, { x: 1, y: 1, z: 1 });
	}
}

/* Animate out hotspots */
function animateHotspotsOut(sceneHotspots) {
	for (const object of sceneHotspots) {
		gsap.to(object.scale, { x: 0, y: 0, z: 0 });
	}
}

/*
	! Cursor
*/
export const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// if (currentIntersect) {
	// console.log("im intersecting");
	// gsap.to(currentIntersect.object.scale, {
	// 	x: 0.5,
	// 	z: 0.5,
	// 	y: 0.5,
	// 	repeat: -1,
	// });
	// }
});

/*
	! Tick
*/
// Clock
const clock = new THREE.Clock();

// Raycaster
const raycaster = new THREE.Raycaster();
let currentIntersect = null;
const tick = () => {
	// Set elapsedTime
	const elapsedTime = clock.getElapsedTime();

	// rotate currentScene
	// PI * 2 is one revloution per second
	group.rotation.y = elapsedTime * Math.PI * 0.01;

	// Cast a ray
	raycaster.setFromCamera(mouse, camera);

	const intersects = raycaster.intersectObjects(allHotSpots);

	// Set currentIntersect object
	if (intersects.length) {
		currentIntersect = intersects[0];
	} else {
		currentIntersect = null;
	}

	controls.update;
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();

/*
	! Resize
*/
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

/* 
	! click hotspot
*/
// Lobby
const breuerChairButton = document.querySelector("#breuerChairButton");
export function onClickLobbyObject() {
	if (currentIntersect) {
		switch (currentIntersect.object) {
			case blueButton:
				console.log("click on a blue button");
				break;
			case breuerChairMesh:
				breuerChairButton.click();
				console.log("click on asterix button");
				break;
		}
	}
}

// Library
export function onClickLibraryObject() {
	if (currentIntersect) {
		switch (
			currentIntersect.object
			// case blueButton:
			// 	console.log("click on a blue button");
			// 	break;
			// case breuerChairMesh:
			// 	breuerChairButton.click();
			// 	console.log("click on asterix button");
			// 	break;
		) {
		}
	}
}

// Outside
export function onClickOutsideObject() {
	if (currentIntersect) {
		switch (
			currentIntersect.object
			// case blueButton:
			// 	console.log("click on a blue button");
			// 	break;
			// case breuerChairMesh:
			// 	breuerChairButton.click();
			// 	console.log("click on asterix button");
			// 	break;
		) {
		}
	}
}

/* 
 ! Render functions
 */

//  Vars
let sceneHotspots = null;
let firstLoad = true;

// Lobby Enter
export const lobbyEnter = () => {
	// Set variables
	sceneHotspots = [breuerChairMesh, blueButton];

	// add objects to scene
	scene.add(lobby, breuerChairMesh, blueButton);
	group.add(lobby, breuerChairMesh, blueButton);

	// Run during loading steps
	DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
		updateProgress(url, itemsLoaded, itemsTotal);
	};

	// Run once when loaded
	DefaultLoadingManager.onLoad = function () {
		setTimeout(() => {
			loadInAnimation(sceneHotspots);
		}, 1000);
		firstLoad = false;
	};

	// run if navigating to new page (has already loaded)
	if (!firstLoad) {
		loadInAnimation(sceneHotspots);
	}

	// on window click toggle
	window.addEventListener("click", onClickLobbyObject);
};

// Lobby Exit
export const lobbyExit = () => {
	//!! Not yet working...
	//!! will need to add to the exit animation
	animateHotspotsOut(sceneHotspots);
	scene.remove(lobby, breuerChairMesh, blueButton);
	group.remove(lobby, breuerChairMesh, blueButton);
	window.removeEventListener("click", onClickLobbyObject);
};

// Library Enter
export const libraryEnter = () => {
	// Set variables
	sceneHotspots = [breuerChairMesh, blueButton];

	// add objects to scene
	scene.add(library, breuerChairMesh, blueButton);
	group.add(library, breuerChairMesh, blueButton);

	// Run during loading steps
	DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
		updateProgress(url, itemsLoaded, itemsTotal);
	};

	// Run once when loaded
	DefaultLoadingManager.onLoad = function () {
		setTimeout(() => {
			loadInAnimation(sceneHotspots);
		}, 1000);
		firstLoad = false;
	};

	// run if navigating to new page (has already loaded)
	if (!firstLoad) {
		loadInAnimation(sceneHotspots);
	}

	// on window click toggle
	window.addEventListener("click", onClickLibraryObject);
};

// Library Exit
export const libraryExit = () => {
	//!! Not yet working...
	//!! will need to add to the exit animation
	animateHotspotsOut(sceneHotspots);
	scene.remove(library, breuerChairMesh, blueButton);
	group.remove(library, breuerChairMesh, blueButton);
	window.removeEventListener("click", onClickLibraryObject);
};

// Outside Enter
export const outsideEnter = () => {
	// Set variables
	sceneHotspots = [breuerChairMesh, blueButton];

	// add objects to scene
	scene.add(outside, breuerChairMesh, blueButton);
	group.add(outside, breuerChairMesh, blueButton);

	// Run during loading steps
	DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
		updateProgress(url, itemsLoaded, itemsTotal);
	};

	// Run once when loaded
	DefaultLoadingManager.onLoad = function () {
		setTimeout(() => {
			loadInAnimation(sceneHotspots);
		}, 1000);
		firstLoad = false;
	};

	// run if navigating to new page (has already loaded)
	if (!firstLoad) {
		loadInAnimation(sceneHotspots);
	}

	// on window click toggle
	window.addEventListener("click", onClickOutsideObject);
};

// Outside Exit
export const outsideExit = () => {
	//!! Not yet working...
	//!! will need to add to the exit animation
	animateHotspotsOut(sceneHotspots);
	scene.remove(outside, breuerChairMesh, blueButton);
	group.remove(outside, breuerChairMesh, blueButton);
	window.removeEventListener("click", onClickOutsideObject);
};
