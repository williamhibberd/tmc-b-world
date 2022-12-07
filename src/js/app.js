/* Packages */
import Alpine from "alpinejs";
import { Core } from "@unseenco/taxi";
import * as THREE from "three";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
// import { VRButton } from "three/addons/webxr/VRButton.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

/* CSS imported here */
import "../css/app.pcss";

/* Components */
import "./utils/vh-screen";

/* Loader */
import "./utils/loader";

/* Place alpine on the window to get Alpine dev tools working */
window.Alpine = Alpine;

/* Alpine data */

/* Start Taxi */
const taxi = new Core();

/* Start Alpine */
Alpine.start();

/* 
	! Textures 
*/
const textureLoader = new THREE.TextureLoader();

const libBg = textureLoader.load("/images/lib.png");
libBg.mapping = THREE.EquirectangularReflectionMapping;
libBg.encoding = THREE.sRGBEncoding;

const testBg = textureLoader.load("/images/test.png");
testBg.mapping = THREE.EquirectangularReflectionMapping;
testBg.encoding = THREE.sRGBEncoding;

const textureVid = document.createElement("video");
textureVid.src = `/videos/new-scene-re.mp4#t=0.001`;
textureVid.setAttribute("crossOrigin", "anonymous");
textureVid.setAttribute("type", "video/mp4");
textureVid.setAttribute("webkit-playsinline", "");
textureVid.setAttribute("playsinline", "");
textureVid.setAttribute("muted", "");
textureVid.setAttribute("autoplay", "");
textureVid.setAttribute("loop", "");
// document.body.appendChild(textureVid); //** test video

const videoTexture = new THREE.VideoTexture(textureVid);
videoTexture.generateMipmaps = false;
videoTexture.encoding = sRGBEncoding;

/* 
	! Scene 
*/
const scene = new THREE.Scene();
// scene.background = videoBackground; //* add background to scene

/* 
	! Camera 
*/
const camera = new THREE.PerspectiveCamera(
	70,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(0, 0, 1);

/* 
	! Renderer 
*/
const canvas = document.querySelector("#bg");
const renderer = new THREE.WebGLRenderer({
	antialias: true,
	alpha: true,
	canvas: canvas,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//* react-three-fiber defaults
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;

renderer.render(scene, camera);

/* 
	! VR 
*/
// renderer.xr.enabled = true;
// document.body.appendChild(VRButton.createButton(renderer));

/* 
	! Spheres 
*/
const lobby = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshBasicMaterial({
		side: THREE.BackSide,
		map: videoTexture,
		// wireframe: true,
	})
);
scene.add(lobby);

const library = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshBasicMaterial({
		side: THREE.BackSide,
		map: libBg,
	})
);
library.position.set(50, 0, 0);
scene.add(library);

const outside = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshBasicMaterial({
		side: THREE.BackSide,
		map: testBg,
	})
);
outside.position.set(-50, 0, 0);
scene.add(outside);

/* 
	! Asterix 
*/
const asterixTexture = textureLoader.load("/images/button.svg");
const breuerChairButton = document.querySelector("#breuerChairButton");
const breuerChairMesh = new THREE.Mesh(
	// new THREE.SphereGeometry(0.125, 32, 32),
	new THREE.CircleGeometry(0.125, 32),
	new THREE.MeshBasicMaterial({
		map: asterixTexture,
	})
);
breuerChairMesh.position.set(-2.7, -0.4, 0.7);
breuerChairMesh.rotation.y = Math.PI * 0.6;
breuerChairMesh.encoding = THREE.sRGBEncoding;
scene.add(breuerChairMesh);

/* 
	! Blue Button 
*/
const blueButton = new THREE.Mesh(
	new THREE.CircleGeometry(0.5, 32),
	new THREE.MeshBasicMaterial({
		color: "blue",
	})
);
blueButton.position.set(0, 0.2, -2.9);
// blueButton.rotation.y = Math.PI * 0.5;
scene.add(blueButton);

/* 
	! Grid helper 
	const size = 10;
	const divisions = 10;
	const gridHelper = new THREE.GridHelper(size, divisions);
	scene.add(gridHelper);
*/

/* 
	! Lighting 
*/
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

/* 
	! Controls 
*/
const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;
controls.enableDamping = true;

/* 
	! reverse orbit controls 
*/
const controlsrotatespeed = -1;
controls.rotateSpeed = controlsrotatespeed;

/*
	!  Cursor
*/
const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener("click", () => {
	if (currentIntersect) {
		switch (currentIntersect.object) {
			case blueButton:
				console.log("click on a blue button");
				break;
			case breuerChairMesh:
				breuerChairButton.click();
				// console.log("click on asterix button");
				break;
		}
	}
});

let currentScene = lobby;

// GSAP animations
const lobbyToOutside = gsap.timeline({
	paused: true,
	defaults: { duration: 1 },
});

lobbyToOutside.to(camera.rotation, { z: 0, x: 0, y: 0 });
lobbyToOutside.to(camera.position, { z: 50 }, "<");
lobbyToOutside.to(currentScene.position, { x: 50 });
lobbyToOutside.to(outside.position, { x: 0 }, "<");
lobbyToOutside.to(camera.position, { z: 0 });

const toggleButton = document.querySelector("#toggleScene");
toggleButton.addEventListener("click", () => {
	if (currentScene === lobby) {
		lobbyToOutside.play();
		currentScene = outside;
	} else {
		lobbyToOutside.reverse();
		currentScene = lobby;
	}
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

	const objectsToTest = [blueButton, breuerChairMesh];
	const intersects = raycaster.intersectObjects(objectsToTest);

	// for (const object of objectsToTest) {
	// 	object.material.color.set("blue");
	// }

	// for (const intersect of intersects) {
	// 	intersect.object.material.color.set("red");
	// }

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
	! Intro / Splash 
*/
const startButton = document.querySelector("#startButton");
const loader = document.querySelector("#loader");
startButton.addEventListener("click", () => {
	// console.log("ive been clicked");
	const startTl = gsap.timeline({
		onComplete: () => videoPlay(),
		defaults: { duration: 0.5, ease: "power4.out" },
	});
	startTl.to(startButton, {
		opacity: 0,
	});
	startTl.to(
		"#loaderTri",
		{
			opacity: 0,
		},
		"<"
	);
	startTl.to(
		"#loaderCircle",
		{
			opacity: 0,
		},
		">-0.25"
	);
	startTl.to(
		"#loaderSquare",
		{
			opacity: 0,
		},
		">-0.25"
	);
	startTl.to("#loaderTitle", {
		duration: 1,
		scale: 50,
	});
	startTl.to(
		loader,
		{
			backgroundColor: "#000",
		},
		"<"
	);
	startTl.to(loader, {
		opacity: 0,
	});
	startTl.set(loader, {
		display: "none",
	});
	startTl.set("#scene", {
		display: "block",
	});
	startTl.to(
		"#scene",
		{
			opacity: 1,
		},
		"<"
	);
});

function videoPlay() {
	// console.log("video playing");
	textureVid.play();
}

/* 
	! Resize 
*/
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
