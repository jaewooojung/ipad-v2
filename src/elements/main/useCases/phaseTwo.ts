import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimationElement } from "../../../Manipulator2D/types";
import { checkScrollBoundary } from "../../../utils/devOnly";
import { sectionDatas } from "../../sectiondatas";

const useCasesLearning: ScrollAnimationElement = {
  elementId: "useCases-learning",
  scrollAnimations: [
    {
      scrollBoundary: [0.66, 0.67],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.68, 0.69],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const useCasesWork: ScrollAnimationElement = {
  elementId: "useCases-work",
  scrollAnimations: [
    {
      scrollBoundary: [0.7, 0.71],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.72, 0.73],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const useCaseCreativity: ScrollAnimationElement = {
  elementId: "useCases-creativity",
  scrollAnimations: [
    {
      scrollBoundary: [0.74, 0.75],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.76, 0.77],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const useCaseEntertainment: ScrollAnimationElement = {
  elementId: "useCases-entertainment",
  scrollAnimations: [
    {
      scrollBoundary: [0.78, 0.79],
      keyframes: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.8, 0.81],
      keyframes: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const scrollAnimationElements = [useCasesLearning, useCasesWork, useCaseCreativity, useCaseEntertainment];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[2], scrollAnimationElements);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimationElements);

function createBox(id: string, title: string, desc: string) {
  return html`<div id=${id} class="absolute inset-0 flex items-end pb-20 lg:items-center">
    <div>
      <div class="mb-10 text-2xl lg:text-3xl 2xl:text-5xl italic underline">${title}</div>
      <div class="text-xl lg:text-4xl 2xl:text-6xl font-semibold leading-tight">${desc}</div>
    </div>
  </div>`;
}

function createPhaseTwo() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full flex lg:justify-end">
      <div class="relative w-full h-full lg:w-1/2">
        ${createBox(
          useCasesLearning.elementId,
          "Learning",
          "Dot Pad gives the low vision community access to maps, diagrams, charts, and other illustrations, allowing easy access to content on the internet."
        )}
        ${createBox(
          useCasesWork.elementId,
          "Work",
          "By making productivity apps accessible, Dot Pad creates whole new career opportunities and a more inclusive workplace."
        )}
        ${createBox(
          useCaseCreativity.elementId,
          "Creativity",
          "Dot Pad is a powerful tool for creative expression, empowering diverse creators in the fields of graphic design, music production, photography, and more."
        )}
        ${createBox(
          useCaseEntertainment.elementId,
          "Entertainment",
          "Artworks, exhibits, comics, and movies. The possibilities are endless when it comes to the world of content that is now accessible through the Dot Pad."
        )}
      </div>
    </div>
  </div>`;
}

export default createPhaseTwo;
