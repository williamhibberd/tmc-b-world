import { Renderer } from "@unseenco/taxi";
import { lobby } from "../components/meshes";
import { scene } from "../components/threeConstants";

export default class Lobby extends Renderer {
	onEnter() {
		// run after the new content has been added to the Taxi container
		// console.log("im on the lobby page");
		scene.add(lobby);

		// const breuerChairButton = document.querySelector("#breuerChairButton");
		// window.addEventListener("click", () => {
		// 	if (currentIntersect) {
		// 		switch (currentIntersect.object) {
		// 			case blueButton:
		// 				console.log("click on a blue button");
		// 				break;
		// 			case breuerChairMesh:
		// 				breuerChairButton.click();
		// 				// console.log("click on asterix button");
		// 				break;
		// 		}
		// 	}
		// });
	}

	onEnterCompleted() {
		// run after the transition.onEnter has fully completed
	}

	onLeave() {
		// run before the transition.onLeave method is called
		scene.remove(lobby);
	}

	onLeaveCompleted() {
		// run after the transition.onleave has fully completed
	}
}
