import { linearEquation, quadraticEquation } from "./utils/math";

const duration = {
  INTRO: 168,
};

function returnSelf(value: number) {
  return value;
}

function returnScale(value: number) {
  return `scale(${value})`;
}

function returnTranslateY(value: number) {
  return `translateY(${value}px)`;
}

export const sequence = {
  // three: [
  //   {
  //     name: "standup",
  //     interval: [0, 15 / duration.INTRO],
  //   },
  //   {
  //     name: "zoomin-slightly",
  //     interval: [15 / duration.INTRO, 20 / duration.INTRO],
  //   },
  //   {
  //     name: "rotation",
  //     interval: [20 / duration.INTRO, 39 / duration.INTRO],
  //   },
  //   {
  //     name: "zoomout-slightly",
  //     interval: [39 / duration.INTRO, 66 / duration.INTRO],
  //   },
  //   {
  //     name: "cloning",
  //     interval: [67 / duration.INTRO, 80 / duration.INTRO],
  //   },
  //   {
  //     name: "spread-clones",
  //     interval: [80 / duration.INTRO, 85 / duration.INTRO],
  //   },
  //   {
  //     name: "screen-effect",
  //     interval: [110 / duration.INTRO, 129 / duration.INTRO],
  //   },
  //   {
  //     name: "gather-clones",
  //     interval: [116 / duration.INTRO, 124 / duration.INTRO],
  //   },
  // ],
  two: {
    intro: [
      {
        domId: "intro-beyondWords",
        interval: [0, 9 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnScale, value: [1, 0] },
          { name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [1, 0] },
        ],
      },
      {
        domId: "intro-mouseWheelIcon",
        interval: [3 / duration.INTRO, 5 / duration.INTRO],
        animations: [{ name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [1, 0] }],
      },
      {
        domId: "intro-ipad",
        interval: [40 / duration.INTRO, 46 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: linearEquation, getValue: returnTranslateY, value: [7, 0] },
          { name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [0, 1] },
        ],
      },
      {
        domId: "intro-thefirst",
        interval: [54 / duration.INTRO, 60 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: linearEquation, getValue: returnTranslateY, value: [7, 0] },
          { name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [0, 1] },
        ],
      },
      {
        domId: "intro-ipad",
        interval: [68 / duration.INTRO, 74 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: linearEquation, getValue: returnTranslateY, value: [0, -3] },
          { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-thefirst",
        interval: [68 / duration.INTRO, 74 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: linearEquation, getValue: returnTranslateY, value: [0, -3] },
          { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-access",
        interval: [105 / duration.INTRO, 114 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [5, 0] },
          { name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-creation",
        interval: [107 / duration.INTRO, 115 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [5, 0] },
          { name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-mobility",
        interval: [107 / duration.INTRO, 115 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [5, 0] },
          { name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-camera",
        interval: [107 / duration.INTRO, 115 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [5, 0] },
          { name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-access",
        interval: [125 / duration.INTRO, 133 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [0, -5] },
          { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-creation",
        interval: [125 / duration.INTRO, 133 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [0, -5] },
          { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-mobility",
        interval: [125 / duration.INTRO, 133 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [0, -5] },
          { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "intro-camera",
        interval: [125 / duration.INTRO, 133 / duration.INTRO],
        animations: [
          { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [0, -5] },
          { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
    ],
    features: [
      // {
      //   domId: "intro-beyondWords",
      //   interval: [0, 9 / duration.INTRO],
      //   animations: [
      //     { name: "transform", timingFunc: quadraticEquation, getValue: returnScale, value: [1, 0] },
      //     { name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [1, 0] },
      //   ],
      // },
    ],
    // useCases: [],
    // contact: [],
    // about: [],
  },
};

export const sectionDatas = [
  {
    id: "intro",
    name: "Ipad",
    scrollBoundary: [0, 5.5],
  },
  { id: "features", name: "Features", scrollBoundary: [5.5, 24.5] },
  { id: "useCases", name: "Use Cases", scrollBoundary: [24.5, 39.5] },
  { id: "contact", name: "Contact", scrollBoundary: [39.5, 41.5] },
  { id: "about", name: "About", scrollBoundary: [41.5, 43] },
];
