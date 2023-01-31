import { ScrollAnimationElement } from "./types";
import { manipulateDirectly, manipulateLinearly } from "./manipulator";

function handleScroll(scrY0to1: number, scrollAnimationElements: Array<ScrollAnimationElement>) {
  scrollAnimationElements.forEach((sae: ScrollAnimationElement) => {
    if (scrY0to1 > sae.scrollAnimations[sae.scrollAnimations.length - 1].scrollBoundary[1]) {
      // 지나감
      sae.scrollAnimations[sae.scrollAnimations.length - 1].keyframes.forEach((k) => {
        manipulateDirectly(sae.elementId, k.name, k.to);
      });
    } else {
      // 도착전
      for (const sa of sae.scrollAnimations) {
        if (scrY0to1 < sa.scrollBoundary[0]) {
          sa.keyframes.forEach((k) => {
            manipulateDirectly(sae.elementId, k.name, k.from);
          });
          break;
        } else if (scrY0to1 <= sa.scrollBoundary[1]) {
          sa.keyframes.forEach((k) => {
            manipulateLinearly(sae.elementId, scrY0to1, sa.scrollBoundary, k.name, k.from, k.to);
          });
          break;
        }
      }
    }
  });
}

export default handleScroll;
