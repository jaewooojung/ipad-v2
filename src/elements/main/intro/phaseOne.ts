import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation } from "../../../Manipulator2D/datas";

const introBeyondWords: ScrollAnimation = {
  id: "intro-beyondWords",
  animations: [
    {
      scrollBoundary: [0, 0.01],
      values: [
        { name: "opacity", from: 1, to: 0 },
        { name: "scale", from: 1, to: 0.8 },
      ],
    },
  ],
};

const introMousewheelIcon: ScrollAnimation = {
  id: "intro-mouseWheelIcon",
  animations: [
    {
      scrollBoundary: [0, 0.003],
      values: [{ name: "opacity", from: 1, to: 0 }],
    },
  ],
};

Manipulator2D.getInstance().addScrollAnimationElement([introBeyondWords, introMousewheelIcon]);

function createPhaseOne() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full flex justify-center items-center">
      <div id="${introBeyondWords.id}" class="text-6xl text-center sm:text-10xl">
        <div class="mb-10">
          <span class="bg-clip-text bg-cover bg-gradient-to-b from-white via-white to-gray-900 text-transparent"
            ><simple-greeting>Beyond</simple-greeting></span
          >
        </div>
        <div>Words</div>
      </div>
      <div id="${introMousewheelIcon.id}" class="absolute bottom-10 text-center">
        <div class="w-5 h-9 flex justify-center items-center border border-solid border-white rounded-xl">
          <div class="w-1 h-3 rounded-xl bg-white animate-flowdown"></div>
        </div>
        <div class="rotate-180">^</div>
      </div>
    </div>
  </div>`;
}

export default createPhaseOne;
