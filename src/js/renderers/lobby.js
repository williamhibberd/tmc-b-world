import { Renderer } from "@unseenco/taxi";
import * as THREE from "three";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
// import { VRButton } from "three/addons/webxr/VRButton.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

export default class Lobby extends Renderer {
	onEnter() {
		console.log("im on the lobby page");
		// run after the new content has been added to the Taxi container
	}

	onEnterCompleted() {
		// run after the transition.onEnter has fully completed
	}

	onLeave() {
		blueButton.dispose();
		// run before the transition.onLeave method is called
	}

	onLeaveCompleted() {
		// run after the transition.onleave has fully completed
	}
}
