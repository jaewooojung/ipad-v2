import { AniElementData, SectionData, initialElementDatas, initialSectionDatas } from "./datas";
import { injectMethodToElement } from "./manipulator";

class DomElements {
  private sectionDatas: Array<SectionData>;
  private aniElementDatas: Array<AniElementData>;

  constructor() {
    this.sectionDatas = initialSectionDatas;
    this.aniElementDatas = injectMethodToElement(initialElementDatas);
  }

  getSectionDatas = () => this.sectionDatas;

  getAniElementDatas = () => this.aniElementDatas;

  onResize = () => {};
}

export default DomElements;
