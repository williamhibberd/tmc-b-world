import * as THREE from "three";
import { camera, renderer, scene } from "./threeConstants";
import { controls } from "./controls";
import { objectsOnScene } from "./meshes";
import gsap from "gsap";

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
	// currentScene.rotation.y = elapsedTime * Math.PI * 0.01;

	// Cast a ray
	raycaster.setFromCamera(mouse, camera);

	const intersects = raycaster.intersectObjects(objectsOnScene);

	// Set currentIntersect object
	if (intersects.length) {
		console.log("im intersecting");
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
	! Resize
*/
export const init = () => {
	// textureVid.play();
	for (const object of objectsOnScene) {
		gsap.to(object.scale, { x: 1, y: 1, z: 1 });
	}
};
