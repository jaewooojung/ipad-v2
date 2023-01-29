import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation, sectionDatas } from "../../../Manipulator2D/datas";
import { checkScrollBoundary } from "../../../utils/devOnly";

const featuresAsimplebluetooth: ScrollAnimation = {
  id: "features-asimplebluetooth",

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
};

const scrollAnimations = [featuresAsimplebluetooth];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[1], scrollAnimations);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

function createPhaseThree() {
  return html`<div class="absolute inset-0">
    <div id=${featuresAsimplebluetooth.id} class="opacity-0 w-full h-full flex justify-center items-center">
      <div class="w-full text-center sm:w-1/2">
        <span class="text-2xl sm:text-7xl sm:leading-relaxed">
          A simple bluetooth connection and boom. The App Store at your desk — the same 2.2 million apps, now accessible
          like never before.</span
        >
      </div>
    </div>
  </div>`;
}

export default createPhaseThree;
