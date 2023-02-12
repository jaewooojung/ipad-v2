import { DefaultLoadingManager } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { ScrollAnimationElement3D } from "../types";
import { manipulateDirectly } from "./scrollHandler";

const initialState = [0, 0, 0, Math.PI * -0.5, 0, Math.PI * 0.5, 1, 1, 1];

async function initIpad() {
  const gltfLoader = new GLTFLoader(DefaultLoadingManager);

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/gltf/");
  gltfLoader.setDRACOLoader(dracoLoader);
  const gltf = await gltfLoader.loadAsync("/ipad.glb");
  const ipad = gltf.scene.children[0];
  const clones = [];
  for (let i = 0; i < 4; i++) {
    const clone = ipad.clone();
    clone.name = `clone${i}`;
    clones.push(clone);
  }
  ipad.add(...clones);
  manipulateDirectly(ipad, initialState);

  return { ipad, clones };
}

// Scroll Animation

export const scrollAnimationIpad: ScrollAnimationElement3D = {
  objectName: "ipad",
  scrollAnimations: [
    {
      scrollBoundary: [0.02, 0.03],
      name: "intro standup",
      states: {
        from: initialState,
        to: [0, 0, 0, 0, 0, Math.PI * 0.5, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.04, 0.06],
      name: "intro rotation",
      states: {
        from: [0, 0, 0, 0, 0, Math.PI * 0.5, 1, 1, 1],
        to: [0, 0, 0, 0, 0, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.09, 0.12],
      name: "intro rotation, zoomout",
      states: {
        from: [0, 0, 0, 0, 0, 0, 1, 1, 1],
        to: [0, 0, -5, 0, Math.PI * 2, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.18, 0.2],
      name: "features slide right",
      states: {
        from: [0, 0, -5, 0, Math.PI * 2, 0, 1, 1, 1],
        to: [5, 0, 0, 0, Math.PI * 1.5, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.27, 0.29],
      name: "features slide left",
      states: {
        from: [5, 0, 0, 0, Math.PI * 1.5, 0, 1, 1, 1],
        to: [-3, 0, 3, Math.PI * 0.1, Math.PI * 2.5, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.36, 0.38],
      name: "features disappear to left",
      states: {
        from: [-3, 0, 3, Math.PI * 0.1, Math.PI * 2.5, 0, 1, 1, 1],
        to: [-30, 0, 0, Math.PI * 0.1, Math.PI * 2.5, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.39, 0.391],
      name: "features prepare slide right",
      states: {
        from: [-30, 0, 0, Math.PI * 0.1, Math.PI * 2.5, 0, 1, 1, 1],
        to: [-30, 0, 0, 0, Math.PI, 0, 1.5, 1.5, 1.5],
      },
    },
    {
      scrollBoundary: [0.47, 0.49],
      name: "features slide right",
      states: {
        from: [-30, 0, 0, 0, Math.PI, 0, 1.5, 1.5, 1.5],
        to: [-3, 0, 0, 0, Math.PI, 0, 1.5, 1.5, 1.5],
      },
    },
    {
      scrollBoundary: [0.5, 0.52],
      name: "features rotation",
      states: {
        from: [-3, 0, 0, 0, Math.PI, 0, 1.5, 1.5, 1.5],
        to: [-3, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5],
      },
    },
    {
      scrollBoundary: [0.53, 0.55],
      name: "features disappear slide left",
      states: {
        from: [-3, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5],
        to: [-30, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5],
      },
    },
    {
      scrollBoundary: [0.56, 0.561],
      name: "features prepare jump to right",
      states: {
        from: [-30, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5],
        to: [-30, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    {
      scrollBoundary: [0.57, 0.571],
      name: "features jump to right",
      states: {
        from: [-30, 0, 0, 0, 0, 0, 0, 0, 0],
        to: [30, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    {
      scrollBoundary: [0.58, 0.581],
      name: "usecases prepare slide left",
      states: {
        from: [30, 0, 0, 0, 0, 0, 0, 0, 0],
        to: [30, 0, 0, 0, 0, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.65, 0.67],
      name: "usecases slide left",
      states: {
        from: [30, 0, 0, 0, 0, 0, 1, 1, 1],
        to: [-5, 0, 0, 0, 0, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.74, 0.75],
      name: "usecases rotation",
      states: {
        from: [-5, 0, 0, 0, 0, 0, 1, 1, 1],
        to: [-5, 0, 0, 0, Math.PI * 3, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.8, 0.82],
      name: "disappear to right",
      states: {
        from: [-5, 0, 0, 0, Math.PI * 3, 0, 1, 1, 1],
        to: [30, 0, 0, 0, 0, 0, 1, 1, 1],
      },
    },
  ],
};

export { initIpad };
