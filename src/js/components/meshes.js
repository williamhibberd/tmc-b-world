import * as THREE from "three";
import {
	lobbyTexture,
	libraryTexture,
	outsideTexture,
	asterixTexture,
} from "../components/textures";

/*
	! Rooms
*/
export const lobby = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshBasicMaterial({
		side: THREE.BackSide,
		map: lobbyTexture,
	})
);

export const library = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshBasicMaterial({
		side: THREE.BackSide,
		map: libraryTexture,
	})
);

export const outside = new THREE.Mesh(
	new THREE.SphereGeometry(3, 32, 32),
	new THREE.MeshBasicMaterial({
		side: THREE.BackSide,
		map: outsideTexture,
	})
);

/*
	! Hotspots
*/
export const breuerChairMesh = new THREE.Mesh(
	// new THREE.SphereGeometry(0.125, 32, 32),
	new THREE.CircleGeometry(0.125, 32),
	new THREE.MeshBasicMaterial({
		map: asterixTexture,
	})
);
breuerChairMesh.position.set(-2.7, -0.4, 0.7);
breuerChairMesh.rotation.y = Math.PI * 0.6;
breuerChairMesh.scale.set(0, 0, 0);

export const blueButton = new THREE.Mesh(
	new THREE.CircleGeometry(0.5, 32),
	new THREE.MeshBasicMaterial({
		color: "blue",
	})
);
blueButton.position.set(0, 0.2, -2.9);
blueButton.scale.set(0, 0, 0);
// blueButton.rotation.y = Math.PI * 0.5;

export const allHotSpots = [blueButton, breuerChairMesh];
