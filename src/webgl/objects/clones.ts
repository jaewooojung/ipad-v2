import { Object3D } from "three";
import { ScrollAnimationElement3D } from "../types";
import { manipulateDirectly, manipulateLinearly } from "./scrollHandler";

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

export { scrollAnimationCloneArr };
