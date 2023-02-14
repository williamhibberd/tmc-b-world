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
	lobbyShoeMesh,
	wassilyChairMesh,
	barcelonaPavilionMesh,
	libShoeMesh,
	vitraClockMesh,
	bauhausBuildingMesh,
	outsideShoeMesh,
	oskarMesh,
	outsideBuildingMesh,
} from "./meshes";
import lazySizes from "lazysizes";

/*
	! Loading
*/
/* Update loader */
let loaderValue = 0;
function updateProgress(url, itemsLoaded, itemsTotal) {
	// console.log(`loading file: ${url}.\n${itemsLoaded} of ${itemsTotal} files`);
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
// const startButton = document.querySelector("#startButton");

/* Load in animation */
const loadingEl = document.querySelector("#loader");
function loadInAnimation(sceneHotspots) {
	const loadInTl = gsap.timeline({
		onComplete: () => animateHotspotsIn(sceneHotspots), //! only needed if using video
		defaults: { duration: 0.5, ease: "power4.out" },
	});
	loadInTl.to(".loader-shape", { opacity: 0 });
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

/* Toggle Panel Open Var */
let spin = true;
export function toggleSpin() {
	if (spin === true) {
		spin = false;
	} else {
		spin = true;
	}
}

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
	if (spin === true) {
		// group.rotation.y = elapsedTime * Math.PI * 0.01;
	}

	// Cast a ray
	raycaster.setFromCamera(mouse, camera);

	const intersects = raycaster.intersectObjects(allHotSpots);

	// Set currentIntersect object
	if (intersects.length) {
		currentIntersect = intersects[0];
	} else {
		currentIntersect = null;
	}

	/* wip to scale object on hover
		// let lastObject = null;
		// if (currentIntersect) {
		// 	console.log(currentIntersect.object);
		// 	lastObject = currentIntersect;
		// 	gsap.to(currentIntersect.scale, { x: 1, y: 1, z: 1 });
		// } else {
		// 	gsap.to(lastObject.object.scale, { x: 0, y: 0, z: 0 }).then(
		// 		(lastObject = null)
		// 	);
		// }
	*/

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
export function onClickLobbyObject() {
	// refrence all buttons to pseudo click
	const toggleLobbyShoe = document.querySelector("#toggleLobbyShoe");
	const toggleWassilyChair = document.querySelector("#toggleWassilyChair");
	const togglebarcelonaPavilion = document.querySelector(
		"#togglebarcelonaPavilion"
	);
	if (currentIntersect) {
		switch (currentIntersect.object) {
			case lobbyShoeMesh:
				toggleLobbyShoe.click();
				break;
			case wassilyChairMesh:
				toggleWassilyChair.click();
				break;
			case barcelonaPavilionMesh:
				togglebarcelonaPavilion.click();
				break;
		}
	}
}

// Library
export function onClickLibraryObject() {
	// refrence all buttons to pseudo click
	const toggleLibShoe = document.querySelector("#toggleLibShoe");
	const toggleVitraClock = document.querySelector("#toggleVitraClock");
	const toggleBauhausBuilding = document.querySelector(
		"#toggleBauhausBuilding"
	);
	if (currentIntersect) {
		switch (currentIntersect.object) {
			case libShoeMesh:
				toggleLibShoe.click();
				break;
			case vitraClockMesh:
				toggleVitraClock.click();
				break;
			case bauhausBuildingMesh:
				toggleBauhausBuilding.click();
				break;
		}
	}
}

// Outside
export function onClickOutsideObject() {
	// refrence all buttons to pseudo click
	const toggleOutsideShoe = document.querySelector("#toggleOutsideShoe");
	const toggleOskar = document.querySelector("#toggleOskar");
	const toggleOutsideBuilding = document.querySelector(
		"#toggleOutsideBuilding"
	);
	if (currentIntersect) {
		switch (currentIntersect.object) {
			case outsideShoeMesh:
				toggleOutsideShoe.click();
				break;
			case oskarMesh:
				toggleOskar.click();
				break;
			case outsideBuildingMesh:
				toggleOutsideBuilding.click();
				break;
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
	sceneHotspots = [lobbyShoeMesh, wassilyChairMesh, barcelonaPavilionMesh];

	// add objects to scene
	scene.add(lobby, lobbyShoeMesh, wassilyChairMesh, barcelonaPavilionMesh);
	group.add(lobby, lobbyShoeMesh, wassilyChairMesh, barcelonaPavilionMesh);

	spin = true;

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
	group.remove(lobby, lobbyShoeMesh, wassilyChairMesh, barcelonaPavilionMesh);
	scene.remove(lobby, lobbyShoeMesh, wassilyChairMesh, barcelonaPavilionMesh);
	window.removeEventListener("click", onClickLobbyObject);
};

// Library Enter
export const libraryEnter = () => {
	// Set variables
	sceneHotspots = [libShoeMesh, vitraClockMesh, bauhausBuildingMesh];

	// add objects to scene
	scene.add(library, libShoeMesh, vitraClockMesh, bauhausBuildingMesh);
	group.add(library, libShoeMesh, vitraClockMesh, bauhausBuildingMesh);

	spin = true;

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
	scene.remove(library, libShoeMesh, vitraClockMesh, bauhausBuildingMesh);
	group.remove(library, libShoeMesh, vitraClockMesh, bauhausBuildingMesh);
	window.removeEventListener("click", onClickLibraryObject);
};

// Outside Enter
export const outsideEnter = () => {
	// Set variables
	sceneHotspots = [outsideShoeMesh, oskarMesh, outsideBuildingMesh];

	// add objects to scene
	scene.add(outside, outsideShoeMesh, oskarMesh, outsideBuildingMesh);
	group.add(outside, outsideShoeMesh, oskarMesh, outsideBuildingMesh);

	spin = true;

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
	scene.remove(outside, outsideShoeMesh, oskarMesh, outsideBuildingMesh);
	group.remove(outside, outsideShoeMesh, oskarMesh, outsideBuildingMesh);
	window.removeEventListener("click", onClickOutsideObject);
};
