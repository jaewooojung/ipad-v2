import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation, sectionDatas } from "../../../Manipulator2D/datas";
import { checkScrollBoundary } from "../../../utils/devOnly";

const useCasesVideo: ScrollAnimation = {
  id: "useCases-video",
  animations: [
    {
      scrollBoundary: [0.6, 0.61],
      values: [{ name: "opacity", from: 0.5, to: 1 }],
    },
    {
      scrollBoundary: [0.63, 0.64],
      values: [{ name: "opacity", from: 1, to: 0.5 }],
    },
  ],
};

const scrollAnimations = [useCasesVideo];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[2], scrollAnimations);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

function createPhaseOne() {
  return html`<div class="w-full h-screen" style="height:300vh">
    <div class="sticky top-0 h-screen flex justify-center items-center bg-black">
      <div id=${useCasesVideo.id} class="opacity-0 w-full h-auto flex justify-center items-center lg:w-2/3">
        <video muted controls mute width="100%" height="100%">
          <source src="/untitled.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>`;
}

export default createPhaseOne;
