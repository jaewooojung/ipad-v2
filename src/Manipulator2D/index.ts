import handleScroll from "./scrollHandler";
import { SectionData, ScrollAnimation, ScrollAnimationElement, sectionDatas, total_vh } from "./datas";
import { injectScrollMethodToElement } from "./manipulator";
import { getFeaturesDotactuator } from "./responsiveData";

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

  addScrollAnimationElement = (scrollAnimations: Array<ScrollAnimation>) => {
    scrollAnimations.forEach((sa) => {
      this.scrollAnimationElements.push(injectScrollMethodToElement(sa));
    });
  };

  onScroll = (scrY0to1: number) => {
    handleScroll(scrY0to1, this.scrollAnimationElements);
  };

  onResize = (newWidth: number) => {
    // features-dotactuator
    const targetIndex = this.scrollAnimationElements.findIndex((sae) => sae.id === "features-dotactuator");
    const newTarget = injectScrollMethodToElement(getFeaturesDotactuator(newWidth));
    this.scrollAnimationElements = [
      ...this.scrollAnimationElements.slice(0, targetIndex),
      newTarget,
      ...this.scrollAnimationElements.slice(targetIndex + 1),
    ];
  };
}

export default Manipulator2D;
