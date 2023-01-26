import ThreeApp from "./webgl/";
import {
  handleScrollHeader,
  handleScrollIntro,
  handleScrollFeatures,
  handleScrollUseCases,
  handleScrollContact,
  handleScrollAbout,
} from "./scrollHandler";
import { sectionDatas } from "./datas";

import "./styles/index.css";

// Three
const ipad3D = document.getElementById("ipad-3D") as HTMLDivElement;
const threeApp = new ThreeApp(ipad3D);
threeApp.load();

// Scroll
function onScroll() {
  const scrollTop = window.scrollY;
  const currentSectionIndex = sectionDatas.findIndex((sd) => scrollTop < sd.scrollBoundary[1] * window.innerHeight);
  const currentSection = sectionDatas[currentSectionIndex];
  /**
   * lerp 0~1
   */
  const progress =
    (scrollTop - currentSection.scrollBoundary[0] * window.innerHeight) /
    ((currentSection.scrollBoundary[1] - currentSection.scrollBoundary[0]) * window.innerHeight);

  handleScrollHeader(currentSectionIndex, progress);
  if (currentSectionIndex === 0) {
    handleScrollIntro(progress);
  } else if (currentSectionIndex === 1) {
    handleScrollFeatures(progress);
  } else if (currentSectionIndex === 2) {
    handleScrollUseCases(progress);
  } else if (currentSectionIndex === 3) {
    handleScrollContact(progress);
  } else if (currentSectionIndex === 4) {
    handleScrollAbout(progress);
  } else {
    throw new Error("currentSectionIndex can not excuted");
  }
}

window.addEventListener("scroll", onScroll);
