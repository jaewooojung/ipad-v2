import { ScrollAnimationElement } from "./types";

export function getFeaturesDotactuator(newWidth: number): ScrollAnimationElement {
  return {
    elementId: "features-dotactuator",
    scrollAnimations: [
      {
        scrollBoundary: [0.49, 0.55],
        keyframes: [
          {
            name: "translateX",
            from: newWidth * 1.1,
            to: newWidth < 640 ? -newWidth * 7 : -newWidth * 2,
          },
        ],
      },
    ],
  };
}
