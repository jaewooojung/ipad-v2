import "./style.css";

import ThreeApp from "./webgl/";

function init() {
  const webglContainer = document.getElementById("ipad-3D") as HTMLDivElement;
  const threeApp = new ThreeApp(webglContainer);
  threeApp.load();
}

init();
