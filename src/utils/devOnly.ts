import { total_vh } from "../elements/sectiondatas";
import { ScrollAnimationElement, SectionData } from "../Manipulator2D/types";

function checkScrollBoundary(currentSectionData: SectionData, scrollAnimationElements: Array<ScrollAnimationElement>) {
  scrollAnimationElements.forEach((sae) => {
    sae.scrollAnimations.forEach((sa) => {
      if (
        sa.scrollBoundary[0] < currentSectionData.scrollBoundary[0] ||
        (currentSectionData.scrollBoundary[1] - sa.scrollBoundary[1]) * total_vh < 100
      ) {
        console.error(`element id:${sae.elementId} is out of it's section scrollBoundary`);
      }
    });
  });
}

export { checkScrollBoundary };
