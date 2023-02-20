import {
	onClickLobbyObject,
	onClickLibraryObject,
	onClickOutsideObject,
	toggleSpin,
} from "./functions";

export default function popup(scene, hasVideo) {
	return {
		open: false,
		scene: scene,
		hasVideo: hasVideo,
		openPopup() {
			toggleSpin();
			this.removePageEvents();
			this.open = true;
		},
		closePopup() {
			if (this.open) {
				toggleSpin();
				this.addPageEvents();
				this.open = false;
			}
			return;
		},
		addPageEvents() {
			switch (this.scene) {
				case "lobby":
					window.addEventListener("click", onClickLobbyObject);
					break;
				case "library":
					window.addEventListener("click", onClickLibraryObject);
					break;
				case "outside":
					window.addEventListener("click", onClickOutsideObject);
					break;
			}
		},
		removePageEvents() {
			switch (this.scene) {
				case "lobby":
					window.removeEventListener("click", onClickLobbyObject);
					break;
				case "library":
					window.removeEventListener("click", onClickLibraryObject);
					break;
				case "outside":
					window.removeEventListener("click", onClickOutsideObject);
					break;
			}
		},
		togglePopup() {
			if (this.open) {
				this.closePopup();
			} else {
				this.openPopup();
			}
		},
	};
}
