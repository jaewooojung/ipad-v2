import { sectionDatas, sequences } from "../datas";

import handleScrollFeatures from "./features";
import handleScrollUseCases from "./useCases";
import handleScrollContact from "./contact";
import handleScrollAbout from "./about";

const OFFSET = 0.1;

const introSequence = sequences.two.intro;

/**
 * [todo]
 * Because of the scaleX functionality broke down when the user scroll using mouse drag and drop widely,
 * i should loop all link like below.
 * it is bad for performance. Fix it someday..
 */
export default function handleScrollHeader(currentSectionIndex: number, progress: number) {
  for (let i = 0; i < sectionDatas.length; i++) {
    const navLink = document.getElementById(`link_scale_right${i}`) as HTMLLIElement;
    if (i === currentSectionIndex) {
      navLink.style.transform = `scaleX(${progress})`;
    } else {
      navLink.style.transform = `scaleX(0)`;
    }
  }
}

function handleScrollIntro(progress: number) {
  introSequence.forEach((s) => {
    if (progress >= s.interval[0] - OFFSET && progress <= s.interval[1] + OFFSET) {
      const element = document.getElementById(s.domId) as any; // [todo] HTML type 확장(string literal 사용)
      const [start, end] = s.interval;
      s.property.forEach((p) => {
        element.style[p.name] = p.getValue(
          p.timingFunc(progress, { x: start, y: p.value[0] }, { x: end, y: p.value[1] })
        );
      });
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
