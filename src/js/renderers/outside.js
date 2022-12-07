import { Renderer } from "@unseenco/taxi";
import { outside } from "../components/meshes";
import { scene } from "../components/threeConstants";

export default class Outside extends Renderer {
	onEnter() {
		scene.add(outside);
		// run after the new content has been added to the Taxi container
		// console.log("im on the Outside page");
	}

	onEnterCompleted() {
		// run after the transition.onEnter has fully completed
	}

	onLeave() {
		// run before the transition.onLeave method is called
		scene.remove(outside);
	}

	onLeaveCompleted() {
		// run after the transition.onleave has fully completed
	}
}
