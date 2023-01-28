import { isBetween } from "./utils/common";
import { AniElementData, SectionData } from "./elements/datas";

export default function handleScrollHeader(scrY0to1: number, sectionDatas: Array<SectionData>) {
  sectionDatas.forEach((sd, i) => {
    const navLink = document.getElementById(`navlink_animated${i}`) as HTMLLIElement;
    if (isBetween(scrY0to1, sd.scrollBoundary[0], sd.scrollBoundary[1])) {
      const progress = (scrY0to1 - sd.scrollBoundary[0]) / (sd.scrollBoundary[1] - sd.scrollBoundary[0]);
      navLink.style.transform = `scaleX(${progress})`;
    } else {
      navLink.style.transform = `scaleX(0)`;
    }
  });
}

function handleScrollMain(scrY0to1: number, aniElementDatas: Array<AniElementData>) {
  aniElementDatas.forEach((aed: AniElementData) => {
    const lastIndex = aed.animations.length - 1;
    if (scrY0to1 > aed.animations[lastIndex].scrollBoundary[1]) {
      aed[`a${lastIndex}-next`](aed.domEle);
    } else {
      for (let i = 0; i < aed.animations.length; i++) {
        if (scrY0to1 < aed.animations[i].scrollBoundary[0]) {
          aed[`a${i}-previous`](aed.domEle);
          break;
        }
        if (isBetween(scrY0to1, aed.animations[i].scrollBoundary[0], aed.animations[i].scrollBoundary[1])) {
          aed[`a${i}`](aed.domEle, scrY0to1);
          break;
        }
      }
    }
  });
}

export { handleScrollHeader, handleScrollMain };
