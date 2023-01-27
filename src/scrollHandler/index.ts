import { isBetween } from "../utils/common";

import { sectionDatas, getDomDatas } from "../datas";

export default function handleScrollHeader(scrollY: number) {
  sectionDatas.forEach((sd, i) => {
    const navLink = document.getElementById(`navlink_animated${i}`) as HTMLLIElement;
    if (isBetween(scrollY / window.innerHeight, sd.scrollBoundary[0], sd.scrollBoundary[1])) {
      const progress =
        (scrollY / window.innerHeight - sd.scrollBoundary[0]) / (sd.scrollBoundary[1] - sd.scrollBoundary[0]);
      navLink.style.transform = `scaleX(${progress})`;
    } else {
      navLink.style.transform = `scaleX(0)`;
    }
  });
}

function handleScrollMain(scrollY: number) {
  getDomDatas().forEach((dData: any) => {
    const element = document.getElementById(dData.id) as HTMLElement;
    if (dData.type === "oneway") {
      const {
        id,
        type,
        scrollBoundary: { a1Start, a1End },
        ...animations
      } = dData;
      if (scrollY < a1Start) {
        // scroll not reached
        animations.handleNotReached(element);
      } else if (scrollY > a1End) {
        // passed
        animations.handlePassed(element);
      } else {
        // a1
        animations.a1(element, scrollY);
      }
    } else {
      // cycle
      const {
        id,
        type,
        scrollBoundary: { a1Start, a1End, a2Start, a2End },
        ...animations
      } = dData;
      if (scrollY >= a1Start) {
        if (scrollY <= a1End) {
          // a1
          animations.a1(element, scrollY);
        } else if (scrollY < a2Start) {
          // static visible
          animations.handleStaticVisible!(element);
        } else if (scrollY <= a2End) {
          // a2
          animations.a2(element, scrollY);
        } else {
          // passed
          animations.handlePassed!(element);
        }
      } else {
        // scroll not come
        animations.handleNotReached!(element);
      }
    }
  });
}

export { handleScrollHeader, handleScrollMain };
