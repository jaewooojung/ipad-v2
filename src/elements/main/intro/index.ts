import { html } from "lit";

import createPhaseOne from "./phaseOne";
import createPhaseThree from "./phaseThree";
import createPhaseTwo from "./phaseTwo";

function createIntro(height_vh: number) {
  const intro = html`<section id="intro" style="height:${height_vh}vh">
    <div class="sticky top-0 w-full h-screen">${createPhaseOne()} ${createPhaseTwo()} ${createPhaseThree()}</div>
  </section>`;
  return intro;
}

export default createIntro;
