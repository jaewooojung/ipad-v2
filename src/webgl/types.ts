export type Tick = (elapsed: number, delta: number) => void;
export type Update = () => void;

export type ScrollState = {
  from: Array<number>;
  to: Array<number>;
};

export type ScrollAnimation3D = {
  scrollBoundary: Array<number>;
  name: string;
  states: ScrollState;
};

export type ScrollAnimationElement3D = {
  objectName: string;
  scrollAnimations: Array<ScrollAnimation3D>;
};
