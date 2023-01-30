import { DefaultLoadingManager } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

async function getIpad() {
  const gltfLoader = new GLTFLoader(DefaultLoadingManager);

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/gltf/");
  gltfLoader.setDRACOLoader(dracoLoader);

  const result = await gltfLoader.loadAsync("/ipad.glb");
  const ipad = result.scene;
  return ipad;
}

export default getIpad;
