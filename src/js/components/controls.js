import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { camera, renderer } from "./threeConstants";

/*
	! Controls
*/
export const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enableDamping = true;

/*
	! reverse orbit controls
*/
const controlsrotatespeed = -1;
controls.rotateSpeed = controlsrotatespeed;
