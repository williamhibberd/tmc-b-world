import * as THREE from "three";
import { sRGBEncoding } from "three";
export const textureLoader = new THREE.TextureLoader();

export const lobbyTexture = textureLoader.load("/images/lobby/lobby.jpg");
lobbyTexture.mapping = THREE.EquirectangularReflectionMapping;
lobbyTexture.encoding = THREE.sRGBEncoding;

export const libraryTexture = textureLoader.load("/images/library/library.jpg");
libraryTexture.mapping = THREE.EquirectangularReflectionMapping;
libraryTexture.encoding = THREE.sRGBEncoding;

export const outsideTexture = textureLoader.load("/images/outside/outside.jpg");
outsideTexture.mapping = THREE.EquirectangularReflectionMapping;
outsideTexture.encoding = THREE.sRGBEncoding;

export const asterixTexture = textureLoader.load("/images/asterix.svg");
asterixTexture.encoding = THREE.sRGBEncoding;

export const textureVid = document.createElement("video");
textureVid.src = `/videos/new-scene-re.mp4#t=0.001`;
textureVid.setAttribute("crossOrigin", "anonymous");
textureVid.setAttribute("type", "video/mp4");
textureVid.setAttribute("webkit-playsinline", "");
textureVid.setAttribute("playsinline", "");
textureVid.setAttribute("muted", "");
textureVid.setAttribute("autoplay", "");
textureVid.setAttribute("loop", "");
// document.body.appendChild(textureVid); //** test video

export const videoTexture = new THREE.VideoTexture(textureVid);
videoTexture.generateMipmaps = false;
videoTexture.encoding = sRGBEncoding;
