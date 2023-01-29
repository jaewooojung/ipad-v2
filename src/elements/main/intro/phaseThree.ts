import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation } from "../../../Manipulator2D/datas";

const introAccess: ScrollAnimation = {
  id: "intro-access",

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
};
const introCreationMobilityCamera: ScrollAnimation = {
  id: "intro-creation-mobility-camera",

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
};

Manipulator2D.getInstance().addScrollAnimationElement([introAccess, introCreationMobilityCamera]);

function createBox(title: string, desc: string) {
  const box = html`<div class="flex-1 overflow-auto">
    <div class="sm:mb-4"><span class="text-lg sm:text-4xl">${title}</span></div>
    <div class="text-sm sm:text-2xl">${desc}</div>
  </div>`;
  return box;
}

function createPhaseThree() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full grid grid-rows-4 grid-cols-1 font-bold sm:grid-rows-3 sm:grid-cols-4 sm:gap-8">
      <div
        id="${introAccess.id}"
        class="opacity-0 row-start-1 row-end-2 self-center text-3xl sm:col-start-1 sm:col-end-5 sm:text-7xl"
      >
        Access visual content from any source.
      </div>
      <div
        id=${introCreationMobilityCamera.id}
        class="opacity-0 row-start-2 row-end-5 sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-4 flex flex-col sm:flex-row sm:justify-between sm:gap-10"
      >
        ${createBox(
          "Creation",
          "For the first time, you can feel your handwriting, sketches, signature, and more. Dot Pad can convert any input on the connected device into a tactile graphic instantly."
        )}
        ${createBox(
          "Mobility",
          "Get around independently with tactile maps. The Dot Pad technology is permanently installed in the public transportation kiosks of Busan, Korea."
        )}
        ${createBox(
          "Camera",
          "With the smartphone camera, you can turn your surroundings into tactile graphics in real-time, unlocking a whole new way to experience the world."
        )}
      </div>
    </div>
  </div>`;
}

export default createPhaseThree;
