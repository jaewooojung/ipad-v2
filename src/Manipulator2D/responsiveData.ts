import { ScrollAnimation } from "./datas";

export function getFeaturesDotactuator(newWidth: number): ScrollAnimation {
  return {
    id: "features-dotactuator",
    animations: [
      {
        scrollBoundary: [0.49, 0.55],
        values: [
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
