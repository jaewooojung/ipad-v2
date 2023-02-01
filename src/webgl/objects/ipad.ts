import { BackSide, DefaultLoadingManager, DoubleSide, FrontSide, Mesh, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { ScrollAnimation3D, ScrollAnimationElement3D } from "../types";
import { linearEquation } from "../../utils/math";

const initialState = [0, 0, 0, Math.PI * -0.5, 0, Math.PI * 0.5, 1, 1, 1];

async function initIpad() {
  const gltfLoader = new GLTFLoader(DefaultLoadingManager);

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/gltf/");
  gltfLoader.setDRACOLoader(dracoLoader);
  const aa = await gltfLoader.loadAsync("/untitled4.glb");
  const ipad = aa.scene.children[0];
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

const scrollAnimationIpad: ScrollAnimationElement3D = {
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
      name: "rotation",
      states: {
        from: [0, 0, 0, 0, 0, Math.PI * 0.5, 1, 1, 1],
        to: [0, 0, 0, 0, 0, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.09, 0.12],
      name: "rotation, zoomout",
      states: {
        from: [0, 0, 0, 0, 0, 0, 1, 1, 1],
        to: [0, 0, -5, 0, Math.PI * 2, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.18, 0.2],
      name: "to right",
      states: {
        from: [0, 0, -5, 0, Math.PI * 2, 0, 1, 1, 1],
        to: [5, 0, 0, 0, Math.PI * 1.5, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.27, 0.29],
      name: "to left",
      states: {
        from: [5, 0, 0, 0, Math.PI * 1.5, 0, 1, 1, 1],
        to: [-3, 0, 3, Math.PI * 0.1, Math.PI * 2.5, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.36, 0.38],
      name: "disappear to left",
      states: {
        from: [-3, 0, 3, Math.PI * 0.1, Math.PI * 2.5, 0, 1, 1, 1],
        to: [-30, 0, 0, Math.PI * 0.1, Math.PI * 2.5, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.39, 0.391],
      name: "prepare to right",
      states: {
        from: [-30, 0, 0, Math.PI * 0.1, Math.PI * 2.5, 0, 1, 1, 1],
        to: [-30, 0, 0, 0, Math.PI, 0, 1.5, 1.5, 1.5],
      },
    },
    {
      scrollBoundary: [0.47, 0.49],
      name: "to right",
      states: {
        from: [-30, 0, 0, 0, Math.PI, 0, 1.5, 1.5, 1.5],
        to: [-3, 0, 0, 0, Math.PI, 0, 1.5, 1.5, 1.5],
      },
    },
    {
      scrollBoundary: [0.5, 0.52],
      name: "rotation",
      states: {
        from: [-3, 0, 0, 0, Math.PI, 0, 1.5, 1.5, 1.5],
        to: [-3, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5],
      },
    },
    {
      scrollBoundary: [0.53, 0.55],
      name: "disappear to left",
      states: {
        from: [-3, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5],
        to: [-30, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5],
      },
    },
    {
      scrollBoundary: [0.56, 0.561],
      name: "prepare jump to right",
      states: {
        from: [-30, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5],
        to: [-30, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    {
      scrollBoundary: [0.57, 0.571],
      name: "jump to right",
      states: {
        from: [-30, 0, 0, 0, 0, 0, 0, 0, 0],
        to: [30, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    },
    {
      scrollBoundary: [0.58, 0.581],
      name: "prepare slide left",
      states: {
        from: [30, 0, 0, 0, 0, 0, 0, 0, 0],
        to: [30, 0, 0, 0, 0, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.65, 0.67],
      name: "slide left",
      states: {
        from: [30, 0, 0, 0, 0, 0, 1, 1, 1],
        to: [-5, 0, 0, 0, 0, 0, 1, 1, 1],
      },
    },
    {
      scrollBoundary: [0.74, 0.75],
      name: "rotation",
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

export function manipulateDirectly(object3D: Object3D, state: Array<number>) {
  object3D.position.set(state[0], state[1], state[2]);
  object3D.rotation.set(state[3], state[4], state[5]);
  object3D.scale.set(state[6], state[7], state[8]);
}

export function manipulateLinearly(scrollY: number, object3D: Object3D, scrollAnimation: ScrollAnimation3D) {
  const {
    scrollBoundary,
    states: { from, to },
  } = scrollAnimation;
  const newState: Array<number> = [];
  for (let i = 0; i < from.length; i++) {
    if (from[i] === to[i]) {
      newState.push(to[i]);
    } else {
      const y = linearEquation(scrollY, { x: scrollBoundary[0], y: from[i] }, { x: scrollBoundary[1], y: to[i] });
      newState.push(y);
    }
  }
  manipulateDirectly(object3D, newState);
}

function handleScrollIpad(scrY0to1: number, ipad: Object3D) {
  const scrollAnimations = scrollAnimationIpad.scrollAnimations;
  const lastScrollAnimation = scrollAnimations[scrollAnimations.length - 1];
  if (scrY0to1 > lastScrollAnimation.scrollBoundary[1]) {
    // 지나감
    manipulateDirectly(ipad, lastScrollAnimation.states.to);
  } else {
    for (const sa of scrollAnimations) {
      if (scrY0to1 < sa.scrollBoundary[0]) {
        manipulateDirectly(ipad, sa.states.from);
        break;
      } else if (scrY0to1 <= sa.scrollBoundary[1]) {
        manipulateLinearly(scrY0to1, ipad, sa);
        break;
      }
    }
  }
}

export { initIpad, handleScrollIpad };
