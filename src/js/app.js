import "./utils/vh-screen";
import "./utils/loader";
import "../css/app.pcss";

import { Core } from "@unseenco/taxi";
import * as THREE from "three";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
import { VRButton } from "three/addons/webxr/VRButton.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const taxi = new Core();

//** Cursor */
// const cursor = {
// 	x: 0,
// 	y: 0,
// };

// window.addEventListener("mousemove", (event) => {
// 	cursor.x = event.clientX / window.innerWidth - 0.5;
// 	cursor.y = event.clientY / window.innerHeight - 0.5;
// });

const canvas = document.querySelector("#bg");
window.addEventListener("mousedown", (event) => {
	canvas.classList.remove("cursor-grab");
	canvas.classList.add("cursor-grabbing");
});
window.addEventListener("mouseup", (event) => {
	canvas.classList.add("cursor-grab");
	canvas.classList.remove("cursor-grabbing");
});

// Textures
const textureLoader = new THREE.TextureLoader();

const libBg = textureLoader.load("/images/lib.png");
libBg.mapping = THREE.EquirectangularReflectionMapping;
libBg.encoding = THREE.sRGBEncoding;

const testBg = textureLoader.load("/images/test.png");
testBg.mapping = THREE.EquirectangularReflectionMapping;
testBg.encoding = THREE.sRGBEncoding;

// Scene
const scene = new THREE.Scene();
// scene.background = videoBackground;

// Camera
const camera = new THREE.PerspectiveCamera(
	70,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(0, 0, 1);

// Renderer
const renderer = new THREE.WebGLRenderer({
	antialias: true,
	alpha: true,
	canvas: canvas,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//** react-three-fiber defaults
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;

renderer.render(scene, camera);

//** VR
// renderer.xr.enabled = true;
// document.body.appendChild(VRButton.createButton(renderer));

//** testing spher
// const bgVid = document.createElement("video");
// bgVid.src = `/videos/scene-video.mp4`;
// bgVid.crossOrigin = "anonymous";
// bgVid.loop = true;
// bgVid.muted = true;
// bgVid.autoplay = true;
// bgVid.play();
// document.body.appendChild(bgVid); //** test video */

// const videoBackground = new THREE.VideoTexture(bgVid);
// videoBackground.generateMipmaps = false;

// const sphere = new THREE.Mesh(
// 	new THREE.SphereGeometry(3, 32, 32),
// 	new THREE.MeshStandardMaterial({
// 		side: THREE.BackSide,
// 		map: videoBackground,
// 	})
// );
// scene.add(sphere);

// Create video and play
const textureVid = document.createElement("video");
textureVid.src = `/videos/new-scene.mp4#t=0.001`;
textureVid.setAttribute("crossOrigin", "anonymous");
textureVid.setAttribute("type", "video/mp4");
textureVid.setAttribute("webkit-playsinline", "");
textureVid.setAttribute("playsinline", "");
textureVid.setAttribute("muted", "");
textureVid.setAttribute("autoplay", "");
textureVid.setAttribute("loop", "");

// document.body.appendChild(textureVid); //** test video */

// Load video texture
const videoTexture = new THREE.VideoTexture(textureVid);
videoTexture.generateMipmaps = false;

// create video and add to scene
const video = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshBasicMaterial({
		side: THREE.BackSide,
		map: videoTexture,
	})
);
// video.position.set(-0.4, 8, -50);
scene.add(video);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enableDamping = true;

// reverse orbit controls
const controlsrotatespeed = -1;
controls.rotateSpeed = controlsrotatespeed;

// Animate
function animate() {
	requestAnimationFrame(animate);
	// camera.rotation.y += -0.0005;
	controls.update;
	renderer.render(scene, camera);
}
animate();

// Start animation
const startButton = document.querySelector("#startButton");
const loader = document.querySelector("#loader");
startButton.addEventListener("click", () => {
	// console.log("ive been clicked");
	const startTl = gsap.timeline({
		onComplete: () => videoPlay(),
		defaults: { duration: 0.5, ease: "power4.out" },
	});
	startTl.to("#loaderTri", {
		opacity: 0,
	});
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
});

function videoPlay() {
	// console.log("video playing");
	textureVid.play();
}

// Resize
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

// Change Scene
const toggleButton = document.querySelector("#toggleScene");
toggleButton.addEventListener("click", () => {
	if (
		scene.background.source.data.currentSrc === libBg.source.data.currentSrc
	) {
		scene.background = testBg;
	} else {
		scene.background = libBg;
	}
});
