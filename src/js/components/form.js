import {
	onClickLobbyObject,
	onClickLibraryObject,
	onClickOutsideObject,
	toggleSpin,
} from "./functions";

export default function form(scene) {
	return {
		open: false,
		success: false,
		scene: scene,
		openPopup() {
			toggleSpin();
			this.removePageEvents();
			if (this.success) {
				this.$refs.successCoin.play();
			} else {
				this.$refs.formCoin.play();
			}
			this.open = true;
		},
		closePopup() {
			if (this.open) {
				toggleSpin();
				this.addPageEvents();
				if (this.success) {
					this.$refs.successCoin.pause();
				} else {
					this.$refs.formCoin.pause();
				}
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
		submitForm() {
			const form = this.$root.querySelector("form");
			if (this.$validate.isComplete(form)) {
				const formData = new FormData(form);
				// console.log(formData);
				fetch("/", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams(formData).toString(),
				})
					// .then(() => console.log("Form successfully submitted"))
					.then(() => this.formSuccess())
					.catch((error) => alert(error));
			}
		},
		formSuccess() {
			this.$refs.formCoin.pause();
			this.$refs.successCoin.play();
			this.success = true;
		},
	};
}
