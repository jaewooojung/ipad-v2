import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimationElement } from "../../../Manipulator2D/types";
import { checkScrollBoundary } from "../../../utils/devOnly";
import { sectionDatas } from "../../sectiondatas";

const useCasesVideo: ScrollAnimationElement = {
  elementId: "useCases-video",
  scrollAnimations: [
    {
      scrollBoundary: [0.6, 0.61],
      keyframes: [{ name: "opacity", from: 0.5, to: 1 }],
    },
    {
      scrollBoundary: [0.63, 0.64],
      keyframes: [{ name: "opacity", from: 1, to: 0.5 }],
    },
  ],
};

const scrollAnimationElements = [useCasesVideo];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[2], scrollAnimationElements);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimationElements);

function createPhaseOne() {
  return html`<div class="w-full h-screen" style="height:300vh">
    <div class="sticky top-0 h-screen flex justify-center items-center bg-black">
      <div id=${useCasesVideo.elementId} class="opacity-0 w-full h-auto flex justify-center items-center lg:w-2/3">
        <video muted controls mute width="100%" height="100%">
          <source src="/untitled.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>`;
}

export default createPhaseOne;
