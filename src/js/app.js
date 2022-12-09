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

import Lobby from "./renderers/Lobby";
import Outside from "./renderers/Outside";
import Library from "./renderers/Library";

/* Place alpine on the window to get Alpine dev tools working */
window.Alpine = Alpine;

/* Alpine data */
Alpine.data("nav", nav);

/* Start Taxi */
const taxi = new Core({
	renderers: {
		lobby: Lobby,
		outside: Outside,
		library: Library,
	},
});

/* Start Alpine */
Alpine.start();
