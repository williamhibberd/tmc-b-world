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
export const barcelonaPavilionMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 32),
	new THREE.MeshBasicMaterial({
		map: asterixTexture,
	})
);
barcelonaPavilionMesh.position.set(2.7, -0.05, 0.7);
barcelonaPavilionMesh.rotation.y = Math.PI * -0.6;
barcelonaPavilionMesh.scale.set(0, 0, 0);

export const wassilyChairMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.2, 32),
	new THREE.MeshBasicMaterial({
		color: "blue",
	})
);
wassilyChairMesh.rotation.y = Math.PI * 1.1;
wassilyChairMesh.position.set(0.8, -0.12, 2.8);
wassilyChairMesh.scale.set(0, 0, 0);

export const allHotSpots = [wassilyChairMesh, barcelonaPavilionMesh];
