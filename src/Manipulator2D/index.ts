import handleScroll from "./scrollHandler";
import { getFeaturesDotactuator } from "./responsiveData";
import { total_vh, sectionDatas } from "../elements/sectiondatas";
import { SectionData, ScrollAnimationElement } from "./types";

class Manipulator2D {
  private static instance: Manipulator2D;
  private total_vh: number;
  private sectionDatas: Array<SectionData>;
  private scrollAnimationElements: Array<ScrollAnimationElement>;

  private constructor() {
    this.total_vh = total_vh;
    this.sectionDatas = sectionDatas;
    this.scrollAnimationElements = [];
  }

  public static getInstance() {
    if (!Manipulator2D.instance) {
      Manipulator2D.instance = new Manipulator2D();
    }
    return Manipulator2D.instance;
  }

  gettotal_vh = () => this.total_vh;
  getSectionDatas = () => this.sectionDatas;

  addScrollAnimationElement = (scrollAnimationElements: Array<ScrollAnimationElement>) => {
    scrollAnimationElements.forEach((sae) => {
      this.scrollAnimationElements.push(sae);
    });
  };

  onScroll = (scrY0to1: number) => {
    handleScroll(scrY0to1, this.scrollAnimationElements);
  };

  onResize = (newWidth: number) => {
    // features-dotactuator
    const targetIndex = this.scrollAnimationElements.findIndex((sae) => sae.elementId === "features-dotactuator");
    const newScrollAnimationElement = getFeaturesDotactuator(newWidth);
    this.scrollAnimationElements = [
      ...this.scrollAnimationElements.slice(0, targetIndex),
      newScrollAnimationElement,
      ...this.scrollAnimationElements.slice(targetIndex + 1),
    ];
  };
}

export default Manipulator2D;
