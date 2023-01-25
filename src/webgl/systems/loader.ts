import { DefaultLoadingManager } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

async function getGltf() {
  const gltfLoader = new GLTFLoader(DefaultLoadingManager);

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/gltf/");
  gltfLoader.setDRACOLoader(dracoLoader);

  const { scene } = await gltfLoader.loadAsync("/ipad.glb");
  scene.scale.multiplyScalar(0.13);
  return scene;
}

export { getGltf };
