import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimationElement } from "../../../Manipulator2D/types";
import { checkScrollBoundary } from "../../../utils/devOnly";
import { sectionDatas } from "../../sectiondatas";

const introIpad: ScrollAnimationElement = {
  elementId: "intro-ipad",
  scrollAnimations: [
    {
      scrollBoundary: [0.03, 0.05],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 7, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.09, 0.11],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -3 },
      ],
    },
  ],
};
const introThefirst: ScrollAnimationElement = {
  elementId: "intro-thefirst",
  scrollAnimations: [
    {
      scrollBoundary: [0.05, 0.07],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 7, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.09, 0.11],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -3 },
      ],
    },
  ],
};

const scrollAnimationElements = [introIpad, introThefirst];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[0], scrollAnimationElements);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimationElements);

function createPhaseTwo() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full flex flex-col justify-center items-center text-center leading-normal">
      <div id=${introIpad.elementId} class="opacity-0 text-5xl lg:text-7xl 2xl:text-9xl">i - Pad</div>
      <div id=${introThefirst.elementId} class="opacity-0 text-xl lg-text-2xl 2xl:text-3xl">
        The first smart tactile graphics display for the visually impaired.
      </div>
    </div>
  </div>`;
}

export default createPhaseTwo;
