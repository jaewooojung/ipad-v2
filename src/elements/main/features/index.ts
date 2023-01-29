import { html } from "lit";

import createPhaseFour from "./phaseFour";
import createPhaseOne from "./phaseOne";
import createPhaseThree from "./phaseThree";
import createPhaseTwo from "./phaseTwo";

function createFeatures(height_vh: number) {
  const features = html`<section id="features" style="height:${height_vh}vh">
    <div class="sticky top-0 w-full h-screen">
      ${createPhaseOne()} ${createPhaseTwo()} ${createPhaseThree()} ${createPhaseFour()}
    </div>
  </section>`;
  return features;
}

export default createFeatures;
