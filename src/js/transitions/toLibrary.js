import { Transition } from "@unseenco/taxi";
import gsap from "gsap";

export default class toLibrary extends Transition {
	/**
	 * Handle the transition leaving the previous page.
	 * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
	 */
	onLeave({ from, trigger, done }) {
		const leaveTL = gsap.timeline({
			onComplete: () => done(),
			defaults: { duration: 0.5, ease: "power4.in" },
		});
		leaveTL.set("#transition", {
			display: "block",
			xPercent: 100,
			backgroundColor: "#DF3128",
		});
		leaveTL.to("#transition", { xPercent: 0 });
	}

	/**
	 * Handle the transition entering the next page.
	 * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
	 */
	onEnter({ to, trigger, done }) {
		document.querySelector("#apple-touch-icon").href =
			"/favicon/library/apple-touch-icon.png";
		document.querySelector("#icon-large").href =
			"/favicon/library/favicon-32x32.png";
		document.querySelector("#icon-small").href =
			"/favicon/library/favicon-16x16.png";
		document.querySelector("#mask").setAttribute("color", "#DF3128");
		document
			.querySelector("#tile-color")
			.setAttribute("content", "#DF3128");

		const enterTL = gsap.timeline({
			onComplete: () => done(),
			defaults: { duration: 0.5, ease: "power4.in" },
		});
		enterTL.to("#transition", { xPercent: -100 });
		enterTL.set("#transition", { display: "hidden", xPercent: 100 });
	}
}
