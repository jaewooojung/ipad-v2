import { ScrollAnimation, SectionData, sectionSizeMultiplier } from "../Manipulator2D/datas";

function checkScrollBoundary(currentSectionData: SectionData, scrollAnimations: Array<ScrollAnimation>) {
  scrollAnimations.forEach((sa) => {
    sa.animations.forEach((a) => {
      if (
        a.scrollBoundary[0] < currentSectionData.scrollBoundary[0] ||
        (currentSectionData.scrollBoundary[1] - a.scrollBoundary[1]) * sectionSizeMultiplier < 100
      ) {
        console.error(`element id:${sa.id} is out of it's section scrollBoundary`);
      }
    });
  });
}

export { checkScrollBoundary };
