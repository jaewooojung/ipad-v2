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

createRoot();

// Three
const ipad3D = document.getElementById("ipad-3D") as HTMLDivElement;
const threeApp = new ThreeApp(ipad3D);
threeApp.load();

// Manipulator2D
const manipulator2D = Manipulator2D.getInstance();

// Scroll
function onScroll() {
  let scrY0to1 = document.body.scrollTop / document.body.scrollHeight;
  manipulator2D.onScroll(scrY0to1);
}

document.body.addEventListener("scroll", throttle(32, onScroll));

// Resize
function onResize() {
  // manipulator2D.onResize();
}

window.addEventListener("resize", onResize);
