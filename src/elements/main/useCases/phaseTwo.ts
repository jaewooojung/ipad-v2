import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation, sectionDatas } from "../../../Manipulator2D/datas";
import { checkScrollBoundary } from "../../../utils/devOnly";

const useCasesLearning: ScrollAnimation = {
  id: "useCases-learning",
  animations: [
    {
      scrollBoundary: [0.66, 0.67],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.68, 0.69],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const useCasesWork: ScrollAnimation = {
  id: "useCases-work",
  animations: [
    {
      scrollBoundary: [0.7, 0.71],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.72, 0.73],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const useCaseCreativity: ScrollAnimation = {
  id: "useCases-creativity",
  animations: [
    {
      scrollBoundary: [0.74, 0.75],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.76, 0.77],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const useCaseEntertainment: ScrollAnimation = {
  id: "useCases-entertainment",
  animations: [
    {
      scrollBoundary: [0.78, 0.79],
      values: [
        { name: "opacity", from: 0, to: 1 },
        { name: "translateY", from: 5, to: 0 },
      ],
    },
    {
      scrollBoundary: [0.8, 0.81],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "translateY", from: 0, to: -10 },
      ],
    },
  ],
};

const scrollAnimations = [useCasesLearning, useCasesWork, useCaseCreativity, useCaseEntertainment];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[2], scrollAnimations);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

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
          useCasesLearning.id,
          "Learning",
          "Dot Pad gives the low vision community access to maps, diagrams, charts, and other illustrations, allowing easy access to content on the internet."
        )}
        ${createBox(
          useCasesWork.id,
          "Work",
          "By making productivity apps accessible, Dot Pad creates whole new career opportunities and a more inclusive workplace."
        )}
        ${createBox(
          useCaseCreativity.id,
          "Creativity",
          "Dot Pad is a powerful tool for creative expression, empowering diverse creators in the fields of graphic design, music production, photography, and more."
        )}
        ${createBox(
          useCaseEntertainment.id,
          "Entertainment",
          "Artworks, exhibits, comics, and movies. The possibilities are endless when it comes to the world of content that is now accessible through the Dot Pad."
        )}
      </div>
    </div>
  </div>`;
}

export default createPhaseTwo;
