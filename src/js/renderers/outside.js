import { Renderer } from "@unseenco/taxi";
import { outsideEnter, outsideExit } from "../components/functions";

export default class Outside extends Renderer {
	onEnter() {
		// run after the new content has been added to the Taxi container
		outsideEnter();
	}

	onEnterCompleted() {
		// run after the transition.onEnter has fully completed
	}

	onLeave() {
		// run before the transition.onLeave method is called
	}

	onLeaveCompleted() {
		// run after the transition.onleave has fully completed
		outsideExit();
	}
}
