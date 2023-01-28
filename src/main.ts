import ThreeApp from "./webgl/";
import { handleScrollHeader, handleScrollMain } from "./scrollHandler";

import "./styles/index.css";
import DomElements from "./elements/DomElements";

import { throttle } from "throttle-debounce";

// if (import.meta.env.PROD) {
//   window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   };
// }

// Three
const ipad3D = document.getElementById("ipad-3D") as HTMLDivElement;
const threeApp = new ThreeApp(ipad3D);
threeApp.load();

// DomElenets
const domElements = new DomElements();

// Scroll
function onScroll() {
  let scrY0to1 = document.body.scrollTop / document.body.scrollHeight;
  handleScrollHeader(scrY0to1, domElements.getSectionDatas());
  handleScrollMain(scrY0to1, domElements.getAniElementDatas());
}

document.body.addEventListener("scroll", throttle(32, onScroll));

// Resize
// function onResize() {
//   domElements.onResize();
// }

// window.addEventListener("resize", onResize);
