import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export function loadGLTFModel(scene, glbPath, options = {
  receiveShadow: true,
  castShadow: true,
}) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(glbPath, (gltf) => {
      const obj = gltf.scene;
      obj.name = 'keyboard';
      obj.position.x = 0;
      obj.position.y = 0;
      obj.receiveShadow = receiveShadow;
      obj.castShadow = castShadow;
      scene.add(obj);
      obj.traverse((child) => {
        if (child.isMesh) {
          child.receiveShadow = receiveShadow;
          child.castShadow = castShadow;
        }
      });
      resolve(obj);
    }, undefined, reject);
  });
}