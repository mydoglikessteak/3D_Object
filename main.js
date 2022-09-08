import "./style.css";

import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, innerHeight);

camera.position.setZ(30);

const geometry = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);

const material = new THREE.MeshBasicMaterial({
  color: 0xf11111,
  wireframe: true,
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
