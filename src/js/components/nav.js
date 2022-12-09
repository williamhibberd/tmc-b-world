import gsap from "gsap";
import {
	onClickLobbyObject,
	onClickLibraryObject,
	onClickOutsideObject,
} from "./functions";

export default function nav(scene) {
	return {
		open: false,
		show: false,
		scene: scene,
		init() {
			gsap.set("#navWrapper", { xPercent: 100 });
			gsap.set("#burger-1", { y: -4 });
			gsap.set("#burger-2", { y: 4 });
		},
		openNav() {
			this.open = true;
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
			this.open = false;
			this.addPageEvents();
			const closeNav = gsap.timeline({
				onComplete: () => (this.show = false),
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
			if (this.open) {
				this.closeNav();
			} else {
				this.openNav();
			}
		},
	};
}
