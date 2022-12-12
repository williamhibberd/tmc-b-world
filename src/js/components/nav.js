import gsap from "gsap";
import {
	onClickLobbyObject,
	onClickLibraryObject,
	onClickOutsideObject,
} from "./functions";

export default function nav(scene) {
	return {
		show: false,
		showInfo: false,
		scene: scene,
		init() {
			gsap.set("#infoWrapper", { xPercent: 100 });
			gsap.set("#navWrapper", { xPercent: 100 });
			gsap.set("#burger-1", { y: -4 });
			gsap.set("#burger-2", { y: 4 });
			gsap.set(this.$refs.text, { opacity: 0 });
			gsap.set(this.$refs.callout, { opacity: 0 });
		},
		openInfo() {
			const openInfo = gsap.timeline({
				onStart: () => (this.showInfo = true),
				defaults: { duration: 0.25, ease: "power4.in" },
			});
			openInfo.fromTo(
				"#infoWrapper",
				{ xPercent: 100 },
				{ xPercent: 0, duration: 0.5 }
			);
			openInfo.fromTo(this.$refs.text, { opacity: 0 }, { opacity: 1 });
			openInfo.fromTo(
				this.$refs.callout,
				{ opacity: 0 },
				{ opacity: 1 },
				"<"
			);
		},
		closeInfo() {
			const closeInfo = gsap.timeline({
				onComplete: () => (this.showInfo = false),
				defaults: { duration: 0.25, ease: "power4.in" },
			});
			closeInfo.fromTo(
				"#infoWrapper",
				{ xPercent: 0 },
				{ xPercent: 100, duration: 0.5 }
			);
			closeInfo.fromTo(this.$refs.text, { opacity: 1 }, { opacity: 0 });
			closeInfo.fromTo(
				this.$refs.callout,
				{ opacity: 1 },
				{ opacity: 0 },
				"<"
			);
		},
		openNav() {
			this.removePageEvents();
			const openNav = gsap.timeline({
				onStart: () => (this.show = true),
				defaults: { duration: 0.25, ease: "power4.in" },
			});
			openNav.fromTo(
				"#navWrapper",
				{ xPercent: 100 },
				{ xPercent: 0, duration: 0.5 }
			);
			openNav.fromTo(".nav-title", { opacity: 0 }, { opacity: 1 });
			openNav.fromTo(
				".nav-item",
				{ opacity: 0, scale: 0 },
				{ opacity: 1, scale: 1, stagger: 0.1 },
				"<"
			);
			openNav.to("#burger-1", { y: 1 }, 0);
			openNav.to("#burger-2", { y: -1 }, 0);
			openNav.to("#burger-1", { rotate: 45 }, 0.5);
			openNav.to("#burger-2", { rotate: -45 }, 0.5);
		},
		closeNav() {
			if (this.show) {
				this.addPageEvents();
				const closeNav = gsap.timeline({
					onComplete: () => (
						(this.show = false), (this.showInfo = false)
					),
					defaults: { duration: 0.25, ease: "power4.in" },
				});
				closeNav.fromTo(
					".nav-item",
					{ opacity: 1, scale: 1 },
					{
						opacity: 0,
						scale: 0,
						stagger: {
							from: "end",
							each: 0.1,
						},
					}
				);
				closeNav.fromTo(
					".nav-title",
					{ opacity: 1 },
					{ opacity: 0 },
					"<+.25"
				);
				closeNav.fromTo(
					"#navWrapper",
					{ xPercent: 0 },
					{ xPercent: 100, duration: 0.5 }
				);
				closeNav.to("#burger-1", { rotate: 0 }, 0);
				closeNav.to("#burger-2", { rotate: 0 }, 0);
				closeNav.to("#burger-1", { y: -4 }, 0.5);
				closeNav.to("#burger-2", { y: 4 }, 0.5);
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
		toggleNav() {
			if (this.show) {
				this.closeNav();
			} else {
				this.openNav();
			}
		},
	};
}
