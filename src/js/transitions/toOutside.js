import { Transition } from "@unseenco/taxi";
import gsap from "gsap";

export default class toOutside extends Transition {
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
			backgroundColor: "#E8E36B",
		});
		leaveTL.to("#transition", { xPercent: 0 });
	}

	/**
	 * Handle the transition entering the next page.
	 * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
	 */
	onEnter({ to, trigger, done }) {
		document.querySelector("#apple-touch-icon").href =
			"/favicon/outside/apple-touch-icon.png";
		document.querySelector("#icon-large").href =
			"/favicon/outside/favicon-32x32.png";
		document.querySelector("#icon-small").href =
			"/favicon/outside/favicon-16x16.png";
		document.querySelector("#mask").setAttribute("color", "#E8E36B");
		document
			.querySelector("#tile-color")
			.setAttribute("content", "#E8E36B");

		const enterTL = gsap.timeline({
			onComplete: () => done(),
			defaults: { duration: 0.5, ease: "power4.in" },
		});
		enterTL.to("#transition", { xPercent: -100 });
		enterTL.set("#transition", { display: "hidden", xPercent: 100 });
	}
}
