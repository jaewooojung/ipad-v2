export type SectionData = {
  id: string;
  name: string;
  scrollBoundary: Array<number>;
};

export type KeyframeType = {
  name: string;
  from: number;
  to: number;
};

type AnimationType = {
  scrollBoundary: Array<number>;
  values: Array<KeyframeType>;
};

export type ScrollAnimation = {
  id: string;
  animations: Array<AnimationType>;
};

export type DynamicFunctions = {
  [key: string]: any;
};

export type ScrollAnimationElement = ScrollAnimation & DynamicFunctions;

// Developer can initialize the Dom size below.

export const sectionSizeMultiplier = 5000;

export const sectionDatas: Array<SectionData> = [
  {
    id: "intro",
    name: "Ipad",
    scrollBoundary: [0, 0.2],
  },
  { id: "features", name: "Features", scrollBoundary: [0.2, 0.6] },
  { id: "useCases", name: "Use Cases", scrollBoundary: [0.6, 0.9] },
  { id: "contact", name: "Contact", scrollBoundary: [0.9, 1] },
];
