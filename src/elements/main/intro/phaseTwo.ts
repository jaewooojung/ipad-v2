import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation, sectionDatas } from "../../../Manipulator2D/datas";
import { checkScrollBoundary } from "../../../utils/devOnly";

const introIpad: ScrollAnimation = {
  id: "intro-ipad",
  animations: [
    {
      scrollBoundary: [0.03, 0.05],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 7, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.09, 0.11],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -3 },
      ],
    },
  ],
};
const introThefirst: ScrollAnimation = {
  id: "intro-thefirst",
  animations: [
    {
      scrollBoundary: [0.05, 0.07],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 7, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.09, 0.11],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -3 },
      ],
    },
  ],
};

const scrollAnimations = [introIpad, introThefirst];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[0], scrollAnimations);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

function createPhaseTwo() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full flex flex-col justify-center items-center text-center leading-normal">
      <div id=${introIpad.id} class="opacity-0 text-5xl sm:text-9xl">i - Pad</div>
      <div id=${introThefirst.id} class="opacity-0 text-2xl sm:text-3xl">
        The first smart tactile graphics display for the visually impaired.
      </div>
    </div>
  </div>`;
}

export default createPhaseTwo;
