import { AniElementData, SectionData, initialElementDatas, initialSectionDatas, sectionSizeMultiplier } from "./datas";
import { injectMethodToElement } from "./manipulator";

class DomDatas {
  private static instance: DomDatas;
  private sectionDatas: Array<SectionData>;
  private aniElementDatas: Array<AniElementData>;
  private sectionSizeMultiplier: number;

  private constructor() {
    this.sectionDatas = initialSectionDatas;
    this.aniElementDatas = injectMethodToElement(initialElementDatas);
    this.sectionSizeMultiplier = sectionSizeMultiplier;
  }

  public static getInstance() {
    // return this.instance || (this.instance = new this());
    if (!DomDatas.instance) {
      DomDatas.instance = new DomDatas();
    }
    return DomDatas.instance;
  }

  getSectionDatas = () => this.sectionDatas;

  getAniElementDatas = () => this.aniElementDatas;

  getSectionSizeMultiplier = () => this.sectionSizeMultiplier;

  onResize = () => {};
}

export default DomDatas;
