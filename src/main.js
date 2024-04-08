import * as THREE from "three";

// 场景
const scene = new THREE.Scene();

// 相机 rspectiveCamera: 透视相机
const camera = new THREE.PerspectiveCamera(
  75, // 视野角度（FOV）
  window.innerWidth / window.innerHeight, // 长宽比
  0.1, // 进截面near
  1000 // 远截面far
);

// 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建立方体 Geometry: 立方体对象
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 材质
const matelial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, matelial);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
