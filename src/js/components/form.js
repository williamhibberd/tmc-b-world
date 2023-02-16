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
		submitForm() {
			const formSubmit = document.querySelector("#formSubmit");
			console.log("testing submit");
			if (this.$validate.isComplete(this.$refs.form)) {
				const myForm = this.$refs.form;
				const formData = new FormData(myForm);
				console.log(formData);
				fetch("/", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams(formData).toString(),
				})
					.then(() => console.log("Form successfully submitted"))
					.then(() => (this.success = true))
					.catch((error) => alert(error));
			}
		},
	};
}
