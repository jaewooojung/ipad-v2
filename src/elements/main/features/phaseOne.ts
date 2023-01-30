import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation, sectionDatas } from "../../../Manipulator2D/datas";
import { checkScrollBoundary } from "../../../utils/devOnly";

const featuresDotimage: ScrollAnimation = {
  id: "features-dotimage",

  animations: [
    {
      scrollBoundary: [0.22, 0.24],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.27, 0.29],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -5 },
      ],
    },
  ],
};

const featuresVisualinput: ScrollAnimation = {
  id: "features-visualinput",

  animations: [
    {
      scrollBoundary: [0.23, 0.25],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.27, 0.29],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -5 },
      ],
    },
  ],
};

const scrollAnimations = [featuresDotimage, featuresVisualinput];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[1], scrollAnimations);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

function createPhaseOne() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full flex items-end lg:items-center">
      <div id=${featuresDotimage.id} class="opacity-0 mb-20 lg:w-2/3 lg:mb-0">
        <div class="mb-5 lg:mb-10"><span class="text-2xl lg:text-3xl 2xl:text-4xl">Dot Image Processor</span></div>
        <div class="text-3xl lg:text-4xl 2xl:text-6xl">
          The innovative processor uses AI to analyze and segment images to produce tactile graphics best suited for
          visually impaired users.
        </div>
      </div>
      <div id=${featuresVisualinput.id} class="opacity-0 absolute bottom-3/4 lg:bottom-10">
        <span class="text-xl font-bold tracking-tighter lg:text-2xl 2xl:text-3xl">
          Visual Input → Content Detection → Semantic Rendering → Tactile mapping</span
        >
      </div>
    </div>
  </div>`;
}

export default createPhaseOne;
