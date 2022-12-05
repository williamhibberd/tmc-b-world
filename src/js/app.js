import "./utils/vh-screen";
import "./utils/loader";
import "../css/app.pcss";

import * as THREE from "three";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
import { VRButton } from "three/addons/webxr/VRButton.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Textures
const textureLoader = new THREE.TextureLoader();

const background = textureLoader.load("./images/test.jpg");
background.mapping = THREE.EquirectangularReflectionMapping;
background.encoding = THREE.sRGBEncoding;

// Scene
const scene = new THREE.Scene();
scene.background = background;

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
	canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//** react-three-fiber defaults
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;

renderer.render(scene, camera);

//** VR
renderer.xr.enabled = true;
document.body.appendChild(VRButton.createButton(renderer));

//** testing sphere
/* 
const texture = new THREE.TextureLoader().load("./images/test.jpg");
const sphere = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshStandardMaterial({
		side: THREE.BackSide,
		map: texture,
	})
);
scene.add(sphere);
*/

// Create video and play
const textureVid = document.createElement("video");
textureVid.src = `./videos/placeholder.mp4`;
textureVid.crossOrigin = "anonymous";
textureVid.loop = true;
textureVid.muted = true;
textureVid.autoplay = true;
textureVid.play();
// document.body.appendChild(textureVid); //** test video */

// Load video texture
const videoTexture = new THREE.VideoTexture(textureVid);
videoTexture.generateMipmaps = false;

// create video and add to scene
const video = new THREE.Mesh(
	new THREE.PlaneGeometry(16, 9),
	new THREE.MeshBasicMaterial({
		map: videoTexture,
	})
);
video.position.set(-0.4, 8, -50);
scene.add(video);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;

// Resize
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animate
function animate() {
	requestAnimationFrame(animate);

	camera.rotation.y += 0.001;
	controls.update;
	renderer.render(scene, camera);
}

animate();
