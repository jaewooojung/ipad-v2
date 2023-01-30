import { html } from "lit";

import createPhaseOne from "./phaseOne";
import createPhaseTwo from "./phaseTwo";
import createPhaseThree from "./phaseThree";

function createUseCases(height_vh: number) {
  const useCases = html`<section id="useCases" style="height:${height_vh}vh">
    ${createPhaseOne()}
    <div class="sticky top-0 w-full h-screen">${createPhaseTwo()} ${createPhaseThree()}</div>
  </section>`;
  return useCases;
}

export default createUseCases;
