import ThreeApp from "./webgl";

import "./styles/index.css";
import Manipulator2D from "./Manipulator2D";

import { throttle } from "throttle-debounce";

// if (import.meta.env.PROD) {
//   window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   };
// }

import createRoot from "./elements/root";

// Three
const ipad3D = document.getElementById("ipad-3D") as HTMLDivElement;
const threeApp = new ThreeApp(ipad3D);
threeApp.load();

// 2D
createRoot();

const manipulator2D = Manipulator2D.getInstance();

// Scroll
function onScroll() {
  let scrY0to1 = document.body.scrollTop / document.body.scrollHeight;
  manipulator2D.onScroll(scrY0to1);
  threeApp.onScroll(scrY0to1);
}

document.body.addEventListener("scroll", throttle(32, onScroll));

// Resize
function onResize() {
  const newWidth = document.body.clientWidth;
  manipulator2D.onResize(newWidth);
  threeApp.onResize();
  // currently Not nesessary. because the scroll behavior depends on the body element which is adaptable to resizing
}

window.addEventListener("resize", onResize);
