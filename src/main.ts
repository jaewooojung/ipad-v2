import ThreeApp from "./webgl/";
import { handleScrollHeader, handleScrollMain } from "./scrollHandler";

import "./styles/index.css";

if (import.meta.env.PROD) {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// Three
const ipad3D = document.getElementById("ipad-3D") as HTMLDivElement;
const threeApp = new ThreeApp(ipad3D);
threeApp.load();

// Scroll
function onScroll() {
  const scrollY = window.scrollY;

  handleScrollHeader(scrollY);
  handleScrollMain(scrollY);
}

window.addEventListener("scroll", onScroll);
