// Developer can initialize the Dom size below.

import { SectionData } from "../Manipulator2D/types";

export const total_vh = 5000;

export const sectionDatas: Array<SectionData> = [
  {
    id: "intro",
    name: "Ipad",
    scrollBoundary: [0, 0.2],
  },
  { id: "features", name: "Features", scrollBoundary: [0.2, 0.6] },
  { id: "useCases", name: "Use Cases", scrollBoundary: [0.6, 0.9] },
  { id: "contact", name: "Contact", scrollBoundary: [0.9, 1] },
];
