export type SectionData = {
  id: string;
  name: string;
  scrollBoundary: Array<number>;
};

export type ScrollKeyframe = {
  name: string;
  from: number;
  to: number;
};

type ScrollAnimation = {
  scrollBoundary: Array<number>;
  keyframes: Array<ScrollKeyframe>;
};

export type ScrollAnimationElement = {
  elementId: string;
  scrollAnimations: Array<ScrollAnimation>;
};
