import { handleScrollHeader, handleScrollMain } from "./scrollHandler";
import { SectionData, ScrollAnimation, ScrollAnimationElement, sectionDatas, sectionSizeMultiplier } from "./datas";
import { injectScrollMethodToElement } from "./manipulator";

class Manipulator2D {
  private static instance: Manipulator2D;
  private sectionSizeMultiplier: number;
  private sectionDatas: Array<SectionData>;
  private scrollAnimationElements: Array<ScrollAnimationElement>;

  private constructor() {
    this.sectionSizeMultiplier = sectionSizeMultiplier;
    this.sectionDatas = sectionDatas;
    this.scrollAnimationElements = [];
  }

  public static getInstance() {
    if (!Manipulator2D.instance) {
      Manipulator2D.instance = new Manipulator2D();
    }
    return Manipulator2D.instance;
  }

  getSectionSizeMultiplier = () => this.sectionSizeMultiplier;
  getSectionDatas = () => this.sectionDatas;

  addScrollAnimationElement = (scrollAnimations: Array<ScrollAnimation>) => {
    scrollAnimations.forEach((sa) => {
      this.scrollAnimationElements.push(injectScrollMethodToElement(sa));
    });
  };

  onScroll = (scrY0to1: number) => {
    handleScrollHeader(scrY0to1, this.sectionDatas);
    handleScrollMain(scrY0to1, this.scrollAnimationElements);
  };

  onResize = () => {};
}

export default Manipulator2D;
