import { DefaultLoadingManager, Group, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { DynamicFunctions, KeyframeType, ScrollAnimation, ScrollAnimationElement } from "../../Manipulator2D/types";
import { linearEquation } from "../../utils/math";
import { isBetween } from "../../utils/common";

/**
 * position, rotation, scale
 */
function setState(ipad: Object3D, state: Array<number>) {
  ipad.position.set(state[0], state[1], state[2]);
  ipad.rotation.set(state[3], state[4], state[5]);
  ipad.scale.set(state[6], state[7], state[8]);
}

async function initIpad() {
  const scrollAnimationElement = injectScrollMethodToElement(scrollAnimation);
  const gltfLoader = new GLTFLoader(DefaultLoadingManager);

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/gltf/");
  gltfLoader.setDRACOLoader(dracoLoader);

  const { scene } = await gltfLoader.loadAsync("/untitled2.glb");
  const temp = new Group();
  temp.add(...scene.children[0].children);
  const multiplier = 10;

  setState(temp, [0, 0, 0, Math.PI * 0.5, 0, Math.PI * 0.5, multiplier, multiplier, multiplier]);

  return { temp, scrollAnimationElement };
}

// Scroll Animation

const scrollAnimation: ScrollAnimation = {
  id: "ipadObject",
  animations: [
    {
      scrollBoundary: [0.02, 0.03],
      values: [
        { name: "position.z", from: 0, to: 3 },
        { name: "rotation.x", from: 0, to: Math.PI * 0.5 },
      ],
    },
    // {
    //   scrollBoundary: [0.04, 0.05],
    //   values: [{ name: "rotation.z", from: 0, to: Math.PI * -2 }],
    // },
    // {
    //   scrollBoundary: [0.06, 0.11],
    //   values: [{ name: "position.z", from: 0, to: -5 }],
    // },
  ],
};

function manipulateDirectly(object3D: any, name: string, value: number) {
  const property = name.split(".");
  object3D[property[0]][property[1]] = value;
  // console.log(object3D.position);
}

function manipulateLinearly(
  object3D: Object3D,
  scrollY: number,
  name: string,
  interval: Array<number>,
  value: Array<number>
) {
  const y = linearEquation(scrollY, { x: interval[0], y: value[0] }, { x: interval[1], y: value[1] });
  manipulateDirectly(object3D, name, y);
}

// Inject animatioins

function injectScrollMethodToElement(scrollAnimation: ScrollAnimation): ScrollAnimationElement {
  const funcObj: DynamicFunctions = {};
  for (let i = 0; i < scrollAnimation.animations.length; i++) {
    // animation
    funcObj[`a${i}`] = (object3D: Object3D, scrollY: number) => {
      scrollAnimation.animations[i].values.forEach((value: KeyframeType) => {
        manipulateLinearly(object3D, scrollY, value.name, scrollAnimation.animations[i].scrollBoundary, [
          value.from,
          value.to,
        ]);
      });
      console.log(`a${i}`);
    };

    // animation previous
    funcObj[`a${i}-previous`] = (object3D: Object3D) => {
      scrollAnimation.animations[i].values.forEach((value: KeyframeType) => {
        manipulateDirectly(object3D, value.name, value.from);
      });
      console.log(`a${i}-previous`);
    };
  }

  // animation next
  const lastIndex = scrollAnimation.animations.length - 1;
  funcObj[`a${lastIndex}-next`] = (object3D: Object3D) => {
    scrollAnimation.animations[lastIndex].values.forEach((value: KeyframeType) => {
      manipulateDirectly(object3D, value.name, value.to);
    });
    console.log(`a${lastIndex}-next`);
  };
  return { ...scrollAnimation, ...funcObj };
}

function handleScrollIpad(scrY0to1: number, sae: ScrollAnimationElement, ipad: Object3D) {
  const lastIndex = sae.animations.length - 1;
  if (scrY0to1 > sae.animations[lastIndex].scrollBoundary[1]) {
    sae[`a${lastIndex}-next`](ipad);
  } else {
    for (let i = 0; i < sae.animations.length; i++) {
      if (scrY0to1 < sae.animations[i].scrollBoundary[0]) {
        sae[`a${i}-previous`](ipad);
        break;
      }
      if (isBetween(scrY0to1, sae.animations[i].scrollBoundary[0], sae.animations[i].scrollBoundary[1])) {
        sae[`a${i}`](ipad, scrY0to1);
        break;
      }
    }
  }
}

export { initIpad, handleScrollIpad };
