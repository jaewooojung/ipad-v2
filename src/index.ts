import ThreeApp from "./webgl";
import { handleScrollHeader, handleScrollMain } from "./scrollHandler";

import "./styles/index.css";
import DomDatas from "./DomDatas";

import { throttle } from "throttle-debounce";

// if (import.meta.env.PROD) {
//   window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   };
// }

import createRoot from "./elements/root";

createRoot();

// Three
const ipad3D = document.getElementById("ipad-3D") as HTMLDivElement;
const threeApp = new ThreeApp(ipad3D);
threeApp.load();

// DomElenets
const domDatas = DomDatas.getInstance();

// Scroll
function onScroll() {
  let scrY0to1 = document.body.scrollTop / document.body.scrollHeight;
  handleScrollHeader(scrY0to1, domDatas.getSectionDatas());
  handleScrollMain(scrY0to1, domDatas.getAniElementDatas());
}

document.body.addEventListener("scroll", throttle(32, onScroll));

// Resize
function onResize() {
  // domDatas.onResize();
}

window.addEventListener("resize", onResize);
