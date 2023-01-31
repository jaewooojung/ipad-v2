import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation, sectionDatas } from "../../../Manipulator2D/datas";
import { checkScrollBoundary } from "../../../utils/devOnly";

const useCaseimg1: ScrollAnimation = {
  id: "useCases-img1",
  animations: [
    {
      scrollBoundary: [0.83, 0.84],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateXPercent", from: -100, to: 0 },
        { name: "translateYPercent", from: -32, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.86, 0.87],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateXPercent", from: 0, to: -100 },
        { name: "translateYPercent", from: 0, to: -32 },
      ],
    },
  ],
};

const useCaseimg2: ScrollAnimation = {
  id: "useCases-img2",
  animations: [
    {
      scrollBoundary: [0.83, 0.84],
      values: [
        { name: "opacity", from: 0, to: 0.8 },
        { name: "translateXPercent", from: 100, to: 0 },
        { name: "translateYPercent", from: 48, to: 16 },
      ],
    },
    {
      scrollBoundary: [0.86, 0.87],
      values: [
        { name: "opacity", from: 0.8, to: 0 },
        { name: "translateXPercent", from: 0, to: 100 },
        { name: "translateYPercent", from: 16, to: 48 },
      ],
    },
  ],
};

const useCaseBecauseapicture: ScrollAnimation = {
  id: "useCases-becauseapicture",
  animations: [
    {
      scrollBoundary: [0.83, 0.84],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 20, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.86, 0.87],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -20 },
      ],
    },
  ],
};

const scrollAnimations = [useCaseimg1, useCaseimg2, useCaseBecauseapicture];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[2], scrollAnimations);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

function createPhaseThree() {
  return html`<div class="absolute inset-0">
    <div class="relative w-full h-full flex justify-center items-center">
      <div
        id=${useCaseimg1.id}
        style="background: url(https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_960_720.jpg); filter: brightness(70%); background-size: contain; background-repeat: no-repeat"
        class="opacity-0 -translate-x-full"
      ></div>
      <div id=${useCaseimg2.id} class="opacity-0 translate-x-full">
        <img
          src="https://cdn.pixabay.com/photo/2015/05/29/19/17/study-789631_960_720.jpg"
          width="100%"
          height="auto"
          alt="office2"
        />
      </div>
      <div id=${useCaseBecauseapicture.id} class="opacity-0 z-20 w-full text-center lg:w-3/4">
        <span class="text-3xl lg:text-6xl 2xl:text-8xl leading-snug">Because a picture is worth a thousand words.</span>
      </div>
    </div>
  </div>`;
}

export default createPhaseThree;
