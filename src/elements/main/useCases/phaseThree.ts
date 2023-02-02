import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimationElement } from "../../../Manipulator2D/types";
import { checkScrollBoundary } from "../../../utils/devOnly";
import { sectionDatas } from "../../sectiondatas";

const useCaseimg1: ScrollAnimationElement = {
  elementId: "useCases-img1",
  scrollAnimations: [
    {
      scrollBoundary: [0.83, 0.84],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateXPercent", from: -100, to: 0 },
        { name: "translateYPercent", from: -32, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.86, 0.87],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateXPercent", from: 0, to: -100 },
        { name: "translateYPercent", from: 0, to: -32 },
      ],
    },
  ],
};

const useCaseimg2: ScrollAnimationElement = {
  elementId: "useCases-img2",
  scrollAnimations: [
    {
      scrollBoundary: [0.83, 0.84],
      keyframes: [
        { name: "opacity", from: 0, to: 0.8 },
        { name: "translateXPercent", from: 100, to: 0 },
        { name: "translateYPercent", from: 48, to: 16 },
      ],
    },
    {
      scrollBoundary: [0.86, 0.87],
      keyframes: [
        { name: "opacity", from: 0.8, to: 0 },
        { name: "translateXPercent", from: 0, to: 100 },
        { name: "translateYPercent", from: 16, to: 48 },
      ],
    },
  ],
};

const useCaseBecauseapicture: ScrollAnimationElement = {
  elementId: "useCases-becauseapicture",
  scrollAnimations: [
    {
      scrollBoundary: [0.83, 0.84],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 20, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.86, 0.87],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -20 },
      ],
    },
  ],
};

const scrollAnimationElements = [useCaseimg1, useCaseimg2, useCaseBecauseapicture];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[2], scrollAnimationElements);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimationElements);

function createPhaseThree() {
  return html`<div class="absolute inset-0">
    <div class="relative w-full h-full flex items-center">
      <div class="relative w-full h-1/2">
        <div
          id=${useCaseimg1.elementId}
          style="background: url(https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_960_720.jpg); filter: brightness(70%); background-size: contain; background-repeat: no-repeat"
          class="opacity-0 -translate-x-full absolute z-10 top-0 left-0 w-4/5 h-full"
        ></div>
        <div id=${useCaseimg2.elementId} class="opacity-0 translate-x-full absolute top-0 right-0 w-2/3 h-auto">
          <img
            src="https://cdn.pixabay.com/photo/2015/05/29/19/17/study-789631_960_720.jpg"
            width="100%"
            height="100%"
            alt="office2"
          />
        </div>
      </div>
      <div id=${useCaseBecauseapicture.elementId} class="opacity-0 absolute top-1/2 z-20 w-full text-center">
        <span class="text-3xl lg:text-6xl 2xl:text-8xl leading-snug">Because a picture is worth a thousand words.</span>
      </div>
    </div>
  </div>`;
}

export default createPhaseThree;
