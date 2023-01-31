import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimationElement } from "../../../Manipulator2D/types";
import { checkScrollBoundary } from "../../../utils/devOnly";
import { sectionDatas } from "../../sectiondatas";

const introAccess: ScrollAnimationElement = {
  elementId: "intro-access",
  scrollAnimations: [
    {
      scrollBoundary: [0.13, 0.15],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.17, 0.175],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const introCreationMobilityCamera: ScrollAnimationElement = {
  elementId: "intro-creation-mobility-camera",
  scrollAnimations: [
    {
      scrollBoundary: [0.135, 0.155],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.17, 0.175],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const scrollAnimationElements = [introAccess, introCreationMobilityCamera];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[0], scrollAnimationElements);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimationElements);

function createBox(title: string, desc: string) {
  const box = html`<div class="flex-1 mb-4">
    <div class="lg:mb-4"><span class="text-lg lg:text-xl 2xl:text-4xl">${title}</span></div>
    <div class="text-sm lg:text-lg 2xl:text-2xl">${desc}</div>
  </div>`;
  return box;
}

function createPhaseThree() {
  return html`<div class="absolute inset-0 py-10">
    <div class="w-full h-full pt-header-height lg:pt-header-height-lg flex flex-col">
      <div
        id="${introAccess.elementId}"
        class="opacity-0 flex-[1] lg:flex-[3] 2xl:flex-[6] text-3xl lg:text-5xl 2xl:text-7xl"
      >
        Access visual content from any source.
      </div>
      <div
        id=${introCreationMobilityCamera.elementId}
        class="opacity-0 flex-[3] flex flex-col lg:flex-row lg:items-center lg:gap-9"
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
