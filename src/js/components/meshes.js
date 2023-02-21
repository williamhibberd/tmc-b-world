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

export const libShoeMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.2, 32),
	new THREE.MeshBasicMaterial({
		color: "red",
	})
);
libShoeMesh.rotation.y = Math.PI * -0.6;
libShoeMesh.position.set(2.8, -0.24, 0.84);
libShoeMesh.scale.set(0, 0, 0);

export const vitraClockMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.2, 32),
	new THREE.MeshBasicMaterial({
		color: "red",
	})
);
vitraClockMesh.rotation.y = Math.PI * -1;
vitraClockMesh.position.set(-0.58, -0.12, 2.86);
vitraClockMesh.scale.set(0, 0, 0);

export const bauhausBuildingMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 32),
	new THREE.MeshBasicMaterial({
		map: asterixTexture,
	})
);
bauhausBuildingMesh.position.set(-2.89, 0.1, -0.38);
bauhausBuildingMesh.rotation.y = Math.PI * 0.4;
bauhausBuildingMesh.scale.set(0, 0, 0);

export const outsideShoeMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.2, 32),
	new THREE.MeshBasicMaterial({
		color: "yellow",
	})
);
outsideShoeMesh.position.set(-2.53, 0.39, -1.3);
outsideShoeMesh.rotation.y = Math.PI * 0.4;
outsideShoeMesh.scale.set(0, 0, 0);

export const oskarMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.2, 32),
	new THREE.MeshBasicMaterial({
		color: "yellow",
	})
);
oskarMesh.position.set(-1.77, 0.64, -1.98);
oskarMesh.rotation.y = Math.PI * 0.4;
oskarMesh.scale.set(0, 0, 0);

export const outsideBuildingMesh = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 32),
	new THREE.MeshBasicMaterial({
		map: asterixTexture,
	})
);
outsideBuildingMesh.position.set(2.31, 0.86, 1.64);
outsideBuildingMesh.rotation.y = Math.PI * -0.7;
outsideBuildingMesh.scale.set(0, 0, 0);

/* Coins */
export const lobbyCoin1 = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 20),
	new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 0,
	})
);
lobbyCoin1.rotation.y = Math.PI * 0;
lobbyCoin1.position.set(-0.33, -0.52, -2.7);
lobbyCoin1.scale.set(0, 0, 0);

export const lobbyCoin2 = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 20),
	new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 0,
	})
);
lobbyCoin2.rotation.y = Math.PI * -0.5;
lobbyCoin2.position.set(2.78, -0.78, -0.08);
lobbyCoin2.scale.set(0, 0, 0);

export const lobbyCoin3 = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 20),
	new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 0,
	})
);
lobbyCoin3.rotation.y = Math.PI * 0.5;
lobbyCoin3.position.set(-2.78, -0.62, -0.38);
lobbyCoin3.scale.set(0, 0, 0);

export const libCoin1 = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 20),
	new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 0,
	})
);
libCoin1.rotation.y = Math.PI * 0.5;
libCoin1.position.set(-2.36, -1.65, -0.26);
libCoin1.scale.set(0, 0, 0);

export const libCoin2 = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 20),
	new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 0,
	})
);
libCoin2.rotation.y = Math.PI * -0.4;
libCoin2.position.set(2.32, -1.11, -1.33);
libCoin2.scale.set(0, 0, 0);

export const libCoin3 = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 20),
	new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 0,
	})
);
libCoin3.rotation.y = Math.PI * 0.9;
libCoin3.position.set(-1.52, -1.42, 2.05);
libCoin3.scale.set(0, 0, 0);

export const outsideCoin = new THREE.Mesh(
	new THREE.CircleGeometry(0.1, 20),
	new THREE.MeshBasicMaterial({
		transparent: true,
		opacity: 0,
	})
);
outsideCoin.rotation.y = Math.PI * 0.6;
outsideCoin.position.set(-2.61, 0.05, 1.17);
outsideCoin.scale.set(0, 0, 0);
