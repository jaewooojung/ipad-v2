import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation, sectionDatas } from "../../../Manipulator2D/datas";
import { checkScrollBoundary } from "../../../utils/devOnly";

const featuresInteract: ScrollAnimation = {
  id: "features-interact",

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
};

const scrollAnimations = [featuresInteract];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[1], scrollAnimations);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

function createPhaseTwo() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full flex items-end lg:justify-end lg:items-center">
      <div id=${featuresInteract.id} class="opacity-0 mb-20 lg:mb-0 lg:w-1/2">
        <div class="mb-5 lg:mb-10">
          <span class="text-2xl lg:text-3xl 2xl:text-4xl">Interact with the graphics and explore every detail.</span>
        </div>
        <div class="text-3xl lg:text-4xl 2xl:text-6xl">
          Simple intuitive controls along with a text-to-braille panel built-in for your comfort.
        </div>
      </div>
    </div>
  </div>`;
}

export default createPhaseTwo;
