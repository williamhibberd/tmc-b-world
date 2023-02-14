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
		// wireframe: true,
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
export const lobbyShoeMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.2, 32),
	new THREE.MeshBasicMaterial({
		color: "blue",
	})
);
lobbyShoeMesh.rotation.y = Math.PI * -0.65;
lobbyShoeMesh.position.set(2.5, 0.74, 1.22);
lobbyShoeMesh.scale.set(0, 0, 0);

export const wassilyChairMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.2, 32),
	new THREE.MeshBasicMaterial({
		color: "blue",
	})
);
wassilyChairMesh.rotation.y = Math.PI * 0.19;
wassilyChairMesh.position.set(-1.99, -0.39, -2.13);
wassilyChairMesh.scale.set(0, 0, 0);

export const barcelonaPavilionMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 32),
	new THREE.MeshBasicMaterial({
		map: asterixTexture,
	})
);
barcelonaPavilionMesh.position.set(2.84, 0.19, -0.67);
barcelonaPavilionMesh.rotation.y = Math.PI * -0.48;
barcelonaPavilionMesh.scale.set(0, 0, 0);

export const allHotSpots = [
	lobbyShoeMesh,
	wassilyChairMesh,
	barcelonaPavilionMesh,
];
