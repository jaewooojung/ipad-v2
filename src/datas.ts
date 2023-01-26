import { linearEquation, quadraticEquation } from "./utils/math";

function returnSelf(value: number) {
  return value;
}

function returnScale(value: number) {
  return `scale(${value})`;
}

export const sequences = {
  three: [
    {
      name: "standup",
      interval: [0, 15 / 130],
    },
    {
      name: "zoomin-slightly",
      interval: [15 / 130, 20 / 130],
    },
    {
      name: "rotation",
      interval: [20 / 130, 39 / 130],
    },
    {
      name: "zoomout-slightly",
      interval: [39 / 130, 66 / 130],
    },
    {
      name: "cloning",
      interval: [67 / 130, 80 / 130],
    },
    {
      name: "spread-clones",
      interval: [80 / 130, 85 / 130],
    },
    {
      name: "screen-effect",
      interval: [110 / 130, 129 / 130],
    },
    {
      name: "gather-clones",
      interval: [116 / 130, 124 / 130],
    },
  ],
  two: {
    intro: [
      {
        domId: "beyondWords",
        interval: [0, 10 / 130],
        property: [
          { name: "transform", value: [1, 0], timingFunc: quadraticEquation, getValue: returnScale },
          { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
        ],
      },
      {
        domId: "mouseWheelIcon",
        interval: [2 / 130, 4 / 130],
        property: [{ name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf }],
      },
      {
        domId: "text1",
        interval: [38 / 130, 43 / 130],
        property: [{ name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf }],
      },
      {
        domId: "text2",
        interval: [50 / 130, 57 / 130],
        property: [{ name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf }],
      },
    ],
    features: [],
    useCases: [],
    contact: [],
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

// [
//   {
//     name: "fadein-bigtext",
//     interval: [38 / 130, 43 / 130],
//   },
//   {
//     name: "fadein-smalltext",
//     interval: [50 / 130, 57 / 130],
//   },
//   {
//     name: "fadeout-bigsmalltext",
//     interval: [65 / 130, 70 / 130],
//   },
//   {
//     name: "fadein-bigtext",
//     interval: [99 / 130, 108 / 130],
//   },
//   {
//     name: "fadein-smalltext",
//     interval: [102 / 130, 110 / 130],
//   },
//   {
//     name: "fadeout-bigsmalltext",
//     interval: [120 / 130, 129 / 130],
//   },
// ];
