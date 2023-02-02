import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimationElement } from "../../../Manipulator2D/types";
import { checkScrollBoundary } from "../../../utils/devOnly";
import { sectionDatas } from "../../sectiondatas";

const footerThankyou: ScrollAnimationElement = {
  elementId: "footer-thankyou",
  scrollAnimations: [
    {
      scrollBoundary: [0.92, 0.98],
      keyframes: [{ name: "opacity", from: 0, to: 1 }],
    },
  ],
};

const scrollAnimationElements = [footerThankyou];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[3], scrollAnimationElements);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimationElements);

function createFooter() {
  const footer = html`<footer class="flex-1 sticky top-0 h-screen">
    <div class="absolute inset-0 flex justify-center items-center">
      <div id=${footerThankyou.elementId} class="opacity-0 w-full text-center">
        <div><span class="text-3xl lg:text-5xl 2xl:text-2xl">Thank you</span></div>
        <div><span>Please contact me via Email: eoldamstory@gmail.com</span></div>
      </div>
    </div>
  </footer>`;
  return footer;
}

export default createFooter;
