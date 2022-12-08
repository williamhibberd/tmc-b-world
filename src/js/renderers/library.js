import { Renderer } from "@unseenco/taxi";
import { libraryEnter, libraryExit } from "../components/functions";

export default class Library extends Renderer {
	onEnter() {
		// run after the new content has been added to the Taxi container
		libraryEnter();
	}

	onEnterCompleted() {
		// run after the transition.onEnter has fully completed
	}

	onLeave() {
		// run before the transition.onLeave method is called
		libraryExit();
	}

	onLeaveCompleted() {
		// run after the transition.onleave has fully completed
	}
}
