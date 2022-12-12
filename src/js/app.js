/* Packages */
import Alpine from "alpinejs";
import { Core } from "@unseenco/taxi";

/* CSS imported here */
import "../css/app.pcss";

/* Components */
import "./utils/vh-screen";
import "./components/textures";
import "./components/threeConstants";
import "./components/meshes";
import "./components/controls";
import "./components/functions";
import nav from "./components/nav";
import popup from "./components/popup";

import DefaultTaxiTransition from "./transitions/default";
import toLobby from "./transitions/toLobby";
import toLibrary from "./transitions/toLibrary";
import toOutside from "./transitions/toOutside";
import Lobby from "./renderers/Lobby";
import Outside from "./renderers/Outside";
import Library from "./renderers/Library";

/* Place alpine on the window to get Alpine dev tools working */
window.Alpine = Alpine;

/* Alpine data */
Alpine.data("nav", nav);
Alpine.data("popup", popup);

/* Start Taxi */
const taxi = new Core({
	transitions: {
		default: DefaultTaxiTransition,
		toLobby: toLobby,
		toLibrary: toLibrary,
		toOutside: toOutside,
	},
	renderers: {
		lobby: Lobby,
		outside: Outside,
		library: Library,
	},
});

taxi.addRoute("/.*", "/", "toLobby");
taxi.addRoute("/.*", "/library/", "toLibrary");
taxi.addRoute("/.*", "/outside/", "toOutside");

/* Start Alpine */
Alpine.start();
