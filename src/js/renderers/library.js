import { Renderer } from "@unseenco/taxi";

export default class Library extends Renderer {
	onEnter() {
		console.log("im on the Library page");
		// run after the new content has been added to the Taxi container
	}

	onEnterCompleted() {
		// run after the transition.onEnter has fully completed
	}

	onLeave() {
		// run before the transition.onLeave method is called
	}

	onLeaveCompleted() {
		// run after the transition.onleave has fully completed
	}
}
