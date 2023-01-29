import { isBetween } from "../utils/common";
import { ScrollAnimationElement, SectionData } from "./datas";

function handleScrollHeader(scrY0to1: number, sectionDatas: Array<SectionData>) {
  sectionDatas.forEach((sd) => {
    const navLink = document.getElementById(`navlink-animated-${sd.id}`) as HTMLLIElement;
    if (isBetween(scrY0to1, sd.scrollBoundary[0], sd.scrollBoundary[1])) {
      const progress = (scrY0to1 - sd.scrollBoundary[0]) / (sd.scrollBoundary[1] - sd.scrollBoundary[0]);
      navLink.style.transform = `scaleX(${progress})`;
    } else {
      navLink.style.transform = `scaleX(0)`;
    }
  });
}

function handleScrollMain(scrY0to1: number, scrollAnimationElements: Array<ScrollAnimationElement>) {
  scrollAnimationElements.forEach((sae: ScrollAnimationElement) => {
    const domEle = document.getElementById(sae.id) as HTMLElement;
    const lastIndex = sae.animations.length - 1;
    if (scrY0to1 > sae.animations[lastIndex].scrollBoundary[1]) {
      sae[`a${lastIndex}-next`](domEle);
    } else {
      for (let i = 0; i < sae.animations.length; i++) {
        if (scrY0to1 < sae.animations[i].scrollBoundary[0]) {
          sae[`a${i}-previous`](domEle);
          break;
        }
        if (isBetween(scrY0to1, sae.animations[i].scrollBoundary[0], sae.animations[i].scrollBoundary[1])) {
          sae[`a${i}`](domEle, scrY0to1);
          break;
        }
      }
    }
  });
}

export { handleScrollHeader, handleScrollMain };
