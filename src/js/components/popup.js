import gsap from "gsap";
import {
	onClickLobbyObject,
	onClickLibraryObject,
	onClickOutsideObject,
	toggleSpin,
} from "./functions";

export default function popup(scene) {
	return {
		open: false,
		scene: scene,
		init() {
			gsap.set(this.$refs.text, { opacity: 0 });
			gsap.set(this.$refs.callout, { opacity: 0 });
		},
		openPopup() {
			toggleSpin();
			this.removePageEvents();
			const openPopup = gsap.timeline({
				onStart: () => (this.open = true),
				defaults: { duration: 0.25, ease: "power4.in" },
			});
			openPopup.fromTo(
				this.$refs.container,
				{ xPercent: 100 },
				{ xPercent: 0, duration: 0.5 }
			);
			openPopup.fromTo(this.$refs.text, { opacity: 0 }, { opacity: 1 });
			openPopup.fromTo(
				this.$refs.callout,
				{ opacity: 0 },
				{ opacity: 1 },
				"<"
			);
		},
		closePopup() {
			if (this.open) {
				toggleSpin();
				this.addPageEvents();
				const closePopup = gsap.timeline({
					onComplete: () => (this.open = false),
					defaults: { duration: 0.25, ease: "power4.in" },
				});
				closePopup.fromTo(
					this.$refs.container,
					{ xPercent: 0 },
					{ xPercent: 100, duration: 0.5 }
				);
				closePopup.fromTo(
					this.$refs.text,
					{ opacity: 1 },
					{ opacity: 0 }
				);
				closePopup.fromTo(
					this.$refs.callout,
					{ opacity: 1 },
					{ opacity: 0 },
					"<"
				);
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
