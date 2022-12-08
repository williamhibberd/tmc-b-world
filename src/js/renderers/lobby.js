import { Renderer } from "@unseenco/taxi";
import { lobbyEnter, lobbyExit } from "../components/functions";

export default class Lobby extends Renderer {
	onEnter() {
		// run after the new content has been added to the Taxi container
		lobbyEnter();
	}

	onEnterCompleted() {
		// run after the transition.onEnter has fully completed
	}

	onLeave() {
		// run before the transition.onLeave method is called
		lobbyExit();
	}

	onLeaveCompleted() {
		// run after the transition.onleave has fully completed
	}
}
