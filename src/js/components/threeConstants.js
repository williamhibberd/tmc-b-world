import * as THREE from "three";
import { sRGBEncoding, ACESFilmicToneMapping } from "three";
/*
	! Scene
*/
export const scene = new THREE.Scene();
// scene.background = videoBackground; //* add background to scene

/*
	! Camera
*/
export const camera = new THREE.PerspectiveCamera(
	70,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(0, 0, 1);

/*
	! Renderer
*/
export const canvas = document.querySelector("#bg");
export const renderer = new THREE.WebGLRenderer({
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
