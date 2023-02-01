import { Object3D } from "three";
import { ScrollAnimationElement3D } from "../types";
import { manipulateDirectly, manipulateLinearly } from "./ipad";

const inParent = [0, 0, 0, 0, 0, 0, 1, 1, 1];

const scrollAnimationCloneArr: Array<ScrollAnimationElement3D> = [
  {
    objectName: "clone0",
    scrollAnimations: [
      {
        scrollBoundary: [0.12, 0.14],
        name: "spread",
        states: {
          from: inParent,
          to: [2, 0, -0.5, 0, 0, 0, 1, 1, 1],
        },
      },
      {
        scrollBoundary: [0.17, 0.18],
        name: "gathering",
        states: {
          from: [2, 0, -0.5, 0, 0, 0, 1, 1, 1],
          to: inParent,
        },
      },
      {
        scrollBoundary: [0.18, 0.2],
        name: "spread left",
        states: {
          from: inParent,
          to: [0, 0, 1, 0, 0, 0, 1, 1, 1],
        },
      },
      {
        scrollBoundary: [0.25, 0.27],
        name: "gathering",
        states: {
          from: [0, 0, 1, 0, 0, 0, 1, 1, 1],
          to: inParent,
        },
      },
    ],
  },
  {
    objectName: "clone1",
    scrollAnimations: [
      {
        scrollBoundary: [0.12, 0.14],
        name: "spread",
        states: {
          from: inParent,
          to: [-2, 0, -0.5, 0, 0, 0, 1, 1, 1],
        },
      },
      {
        scrollBoundary: [0.17, 0.18],
        name: "gathering",
        states: {
          from: [-2, 0, -0.5, 0, 0, 0, 1, 1, 1],
          to: inParent,
        },
      },
      {
        scrollBoundary: [0.18, 0.2],
        name: "spread left",
        states: {
          from: inParent,
          to: [0, 0, 2, 0, 0, 0, 1, 1, 1],
        },
      },
      {
        scrollBoundary: [0.25, 0.27],
        name: "gathering",
        states: {
          from: [0, 0, 2, 0, 0, 0, 1, 1, 1],
          to: inParent,
        },
      },
    ],
  },
  {
    objectName: "clone2",
    scrollAnimations: [
      {
        scrollBoundary: [0.12, 0.14],
        name: "spread",
        states: {
          from: inParent,
          to: [4, 0, -1, 0, 0, 0, 1, 1, 1],
        },
      },
      {
        scrollBoundary: [0.17, 0.18],
        name: "gathering",
        states: {
          from: [4, 0, -1, 0, 0, 0, 1, 1, 1],
          to: inParent,
        },
      },
      {
        scrollBoundary: [0.18, 0.2],
        name: "spread left",
        states: {
          from: inParent,
          to: [0, 0, 3, 0, 0, 0, 1, 1, 1],
        },
      },
      {
        scrollBoundary: [0.25, 0.27],
        name: "gathering",
        states: {
          from: [0, 0, 3, 0, 0, 0, 1, 1, 1],
          to: inParent,
        },
      },
    ],
  },
  {
    objectName: "clone3",
    scrollAnimations: [
      {
        scrollBoundary: [0.12, 0.14],
        name: "spread",
        states: {
          from: inParent,
          to: [-4, 0, -1, 0, 0, 0, 1, 1, 1],
        },
      },
      {
        scrollBoundary: [0.17, 0.18],
        name: "gathering",
        states: {
          from: [-4, 0, -1, 0, 0, 0, 1, 1, 1],
          to: inParent,
        },
      },
      {
        scrollBoundary: [0.18, 0.2],
        name: "spread left",
        states: {
          from: inParent,
          to: [0, 0, 4, 0, 0, 0, 1, 1, 1],
        },
      },
      {
        scrollBoundary: [0.25, 0.27],
        name: "gathering",
        states: {
          from: [0, 0, 4, 0, 0, 0, 1, 1, 1],
          to: inParent,
        },
      },
    ],
  },
];

function handleScrollClone(scrY0to1: number, clones: Array<Object3D>) {
  clones.forEach((clone, i) => {
    const scrollAnimations = scrollAnimationCloneArr[i].scrollAnimations;
    const lastScrollAnimation = scrollAnimations[scrollAnimations.length - 1];
    if (scrY0to1 > lastScrollAnimation.scrollBoundary[1]) {
      // 지나감
      manipulateDirectly(clone, lastScrollAnimation.states.to);
    } else {
      for (const sa of scrollAnimations) {
        if (scrY0to1 < sa.scrollBoundary[0]) {
          manipulateDirectly(clone, sa.states.from);
          break;
        } else if (scrY0to1 <= sa.scrollBoundary[1]) {
          manipulateLinearly(scrY0to1, clone, sa);
          break;
        }
      }
    }
  });
}

export { handleScrollClone };
