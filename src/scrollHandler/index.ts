import { sectionDatas, sequence } from "../datas";

import handleScrollFeatures from "./features";
import handleScrollUseCases from "./useCases";
import handleScrollContact from "./contact";
import handleScrollAbout from "./about";

const introSequence = sequence.two.intro;

/**
 * [todo]
 * Because of the scaleX functionality broke down when the user scroll using mouse drag and drop widely,
 * i should loop all link like below.
 * it is bad for performance. Fix it someday..
 */
export default function handleScrollHeader(currentSectionIndex: number, progress: number) {
  for (let i = 0; i < sectionDatas.length; i++) {
    const navLink = document.getElementById(`navlink_animated${i}`) as HTMLLIElement;
    if (i === currentSectionIndex) {
      navLink.style.transform = `scaleX(${progress})`;
    } else {
      navLink.style.transform = `scaleX(0)`;
    }
  }
}
/**
 * semaphore
 */
const needsUpdate: any = {};
for (const value of Object.values(sequence.two)) {
  value.forEach((v, i) => (needsUpdate[v.domId + i] = false));
}

function handleScrollIntro(progress: number) {
  introSequence.forEach((s, i) => {
    const element = document.getElementById(s.domId) as any; // [todo] HTML type 확장(string literal 사용)
    const [start, end] = s.interval;
    // progress not passed
    if (progress <= start && needsUpdate[s.domId + i]) {
      s.animations.forEach((p) => {
        element.style[p.name] = p.value[0];
      });
      needsUpdate[s.domId + i] = false;
    }
    // progress passed
    else if (progress >= end && needsUpdate[s.domId + i]) {
      s.animations.forEach((p) => {
        element.style[p.name] = p.value[1];
      });
      needsUpdate[s.domId + i] = false;
    }
    // animation
    else if (progress > start && progress < end) {
      s.animations.forEach((p) => {
        element.style[p.name] = p.getValue(
          p.timingFunc(progress, { x: start, y: p.value[0] }, { x: end, y: p.value[1] })
        );
      });
      needsUpdate[s.domId + i] = true;
    } else {
      // idle
    }
  });
}

export {
  handleScrollHeader,
  handleScrollIntro,
  handleScrollFeatures,
  handleScrollUseCases,
  handleScrollContact,
  handleScrollAbout,
};
