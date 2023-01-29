import { html } from "lit";

import createIntro from "./intro";
import createFeatures from "./features";
import createUseCaeses from "./useCases";
import createContact from "./contact";

import DomDatas from "../../Manipulator2D";

function createMain() {
  const domDats = DomDatas.getInstance();
  const sectionDatas = domDats.getSectionDatas();
  const sectionSizeMultiplier = domDats.getSectionSizeMultiplier();

  const height_vh_arr = sectionDatas.map((sd) => (sd.scrollBoundary[1] - sd.scrollBoundary[0]) * sectionSizeMultiplier);

  const intro = createIntro(height_vh_arr[0]);
  const features = createFeatures(height_vh_arr[1]);
  const useCases = createUseCaeses(height_vh_arr[2]);
  const contact = createContact(height_vh_arr[3]);

  const main = html`<main>${intro}${features}${useCases}${contact}</main>`;
  return main;
}

export default createMain;
