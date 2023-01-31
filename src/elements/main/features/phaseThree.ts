import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimationElement } from "../../../Manipulator2D/types";
import { checkScrollBoundary } from "../../../utils/devOnly";
import { sectionDatas } from "../../sectiondatas";

const featuresAsimplebluetooth: ScrollAnimationElement = {
  elementId: "features-asimplebluetooth",
  scrollAnimations: [
    {
      scrollBoundary: [0.39, 0.42],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 30, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.44, 0.47],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -30 },
      ],
    },
  ],
};

const scrollAnimationElements = [featuresAsimplebluetooth];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[1], scrollAnimationElements);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimationElements);

function createPhaseThree() {
  return html`<div class="absolute inset-0">
    <div id=${featuresAsimplebluetooth.elementId} class="opacity-0 w-full h-full flex justify-center items-center">
      <div class="w-full text-center lg:w-1/2">
        <span class="text-3xl lg:text-4xl 2xl:text-6xl lg:leading-relaxed">
          A simple bluetooth connection and boom. The App Store at your desk — the same 2.2 million apps, now accessible
          like never before.</span
        >
      </div>
    </div>
  </div>`;
}

export default createPhaseThree;
