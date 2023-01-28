export type SectionData = {
  id: string;
  name: string;
  scrollBoundary: Array<number>;
};

export type ElementData = {
  id: string;
  domEle: HTMLElement;
  animations: Array<AnimationType>;
};

export type DynamicFunctions = {
  [key: string]: any;
};

export type AniElementData = ElementData & DynamicFunctions;

export type KeyframeType = {
  name: string;
  from: number;
  to: number;
};

export type AnimationType = {
  scrollBoundary: Array<number>;
  values: Array<KeyframeType>;
};

export const initialSectionDatas: Array<SectionData> = [
  {
    id: "intro",
    name: "Ipad",
    scrollBoundary: [0, 0.2],
  },
  { id: "features", name: "Features", scrollBoundary: [0.2, 0.6] },
  { id: "useCases", name: "Use Cases", scrollBoundary: [0.6, 0.9] },
  { id: "contact", name: "Contact", scrollBoundary: [0.9, 1] },
];

export const initialElementDatas: Array<ElementData> = [
  {
    id: "intro-beyondWords",
    domEle: document.getElementById("intro-beyondWords") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0, 0.01],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "scale", from: 1, to: 0.8 },
        ],
      },
    ],
  },
  {
    id: "intro-mouseWheelIcon",
    domEle: document.getElementById("intro-mouseWheelIcon") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0, 0.003],
        values: [{ name: "opacity", from: 1, to: 0 }],
      },
    ],
  },
  {
    id: "intro-ipad",
    domEle: document.getElementById("intro-ipad") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.03, 0.05],
        values: [
          { name: "opacity", from: 0, to: 1 },
          { name: "translateY", from: 7, to: 0 },
        ],
      },
      {
        scrollBoundary: [0.09, 0.11],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "translateY", from: 0, to: -3 },
        ],
      },
    ],
  },
  {
    id: "intro-thefirst",
    domEle: document.getElementById("intro-thefirst") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.05, 0.07],
        values: [
          { name: "opacity", from: 0, to: 1 },
          { name: "translateY", from: 7, to: 0 },
        ],
      },
      {
        scrollBoundary: [0.09, 0.11],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "translateY", from: 0, to: -3 },
        ],
      },
    ],
  },
  {
    id: "intro-access",
    domEle: document.getElementById("intro-access") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.13, 0.15],
        values: [
          { name: "opacity", from: 0, to: 1 },
          { name: "translateY", from: 5, to: 0 },
        ],
      },
      {
        scrollBoundary: [0.17, 0.19],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "translateY", from: 0, to: -10 },
        ],
      },
    ],
  },
  {
    id: "intro-creation-mobility-camera",
    domEle: document.getElementById("intro-creation-mobility-camera") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.135, 0.155],
        values: [
          { name: "opacity", from: 0, to: 1 },
          { name: "translateY", from: 5, to: 0 },
        ],
      },
      {
        scrollBoundary: [0.17, 0.19],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "translateY", from: 0, to: -10 },
        ],
      },
    ],
  },
  {
    id: "features-dotimage",
    domEle: document.getElementById("features-dotimage") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.22, 0.24],
        values: [
          { name: "opacity", from: 0, to: 1 },
          { name: "translateY", from: 5, to: 0 },
        ],
      },
      {
        scrollBoundary: [0.27, 0.29],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "translateY", from: 0, to: -5 },
        ],
      },
    ],
  },
  {
    id: "features-visualinput",
    domEle: document.getElementById("features-visualinput") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.23, 0.25],
        values: [
          { name: "opacity", from: 0, to: 1 },
          { name: "translateY", from: 5, to: 0 },
        ],
      },
      {
        scrollBoundary: [0.27, 0.29],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "translateY", from: 0, to: -5 },
        ],
      },
    ],
  },
  {
    id: "features-interact",
    domEle: document.getElementById("features-interact") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.31, 0.33],
        values: [
          { name: "opacity", from: 0, to: 1 },
          { name: "translateY", from: 5, to: 0 },
        ],
      },
      {
        scrollBoundary: [0.35, 0.37],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "translateY", from: 0, to: -5 },
        ],
      },
    ],
  },
  {
    id: "features-asimplebluetooth",
    domEle: document.getElementById("features-asimplebluetooth") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.39, 0.42],
        values: [
          { name: "opacity", from: 0, to: 1 },
          { name: "translateY", from: 30, to: 0 },
        ],
      },
      {
        scrollBoundary: [0.44, 0.47],
        values: [
          { name: "opacity", from: 1, to: 0 },
          { name: "translateY", from: 0, to: -30 },
        ],
      },
    ],
  },
  {
    id: "features-gamechanging",
    domEle: document.getElementById("features-gamechanging") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.49, 0.51],
        values: [{ name: "opacity", from: 0, to: 1 }],
      },
      {
        scrollBoundary: [0.53, 0.55],
        values: [{ name: "opacity", from: 1, to: 0 }],
      },
    ],
  },
  {
    id: "features-dotactuator",
    domEle: document.getElementById("features-dotactuator") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.49, 0.55],
        values: [{ name: "translateX", from: document.body.clientWidth + 100, to: -document.body.clientWidth * 2 }],
      },
    ],
  },
  {
    id: "features-black-curtain",
    domEle: document.getElementById("features-black-curtain") as HTMLElement,
    animations: [
      {
        scrollBoundary: [0.49, 0.49001],
        values: [{ name: "opacity", from: 0, to: 1 }],
      },
      {
        scrollBoundary: [0.54999, 0.55],
        values: [{ name: "opacity", from: 1, to: 0 }],
      },
    ],
  },
];
