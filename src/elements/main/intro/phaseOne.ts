import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimationElement } from "../../../Manipulator2D/types";
import { checkScrollBoundary } from "../../../utils/devOnly";
import { sectionDatas } from "../../sectiondatas";

const introBeyondWords: ScrollAnimationElement = {
  elementId: "intro-beyondWords",
  scrollAnimations: [
    {
      scrollBoundary: [0, 0.01],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "scale", from: 1, to: 0.8 },
      ],
    },
  ],
};

const introMousewheelIcon: ScrollAnimationElement = {
  elementId: "intro-mouseWheelIcon",
  scrollAnimations: [
    {
      scrollBoundary: [0, 0.003],
      keyframes: [{ name: "opacity", from: 1, to: 0 }],
    },
  ],
};

const scrollAnimationElements = [introBeyondWords, introMousewheelIcon];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[0], scrollAnimationElements);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimationElements);

function createPhaseOne() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full flex justify-center items-center">
      <div id="${introBeyondWords.elementId}" class="text-center text-6xl lg:text-8xl 2xl:text-10xl">
        <div class="mb-10">
          <span class="bg-clip-text bg-cover bg-gradient-to-b from-white via-white to-gray-900 text-transparent"
            >Beyond</span
          >
        </div>
        <div>Words</div>
      </div>
      <div id="${introMousewheelIcon.elementId}" class="absolute bottom-10 text-center">
        <div class="w-5 h-9 flex justify-center items-center border border-solid border-white rounded-xl">
          <div class="w-1 h-3 rounded-xl bg-white animate-flowdown"></div>
        </div>
        <div class="rotate-180">^</div>
      </div>
    </div>
  </div>`;
}

export default createPhaseOne;
