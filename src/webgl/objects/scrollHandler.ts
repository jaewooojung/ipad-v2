import { Object3D } from "three";
import { linearEquation } from "../../utils/math";
import { ScrollAnimation3D, ScrollAnimationElement3D } from "../types";

export function manipulateDirectly(object3D: Object3D, state: Array<number>) {
  object3D.position.set(state[0], state[1], state[2]);
  object3D.rotation.set(state[3], state[4], state[5]);
  object3D.scale.set(state[6], state[7], state[8]);
}

export function manipulateLinearly(scrollY: number, object3D: Object3D, scrollAnimation: ScrollAnimation3D) {
  const {
    scrollBoundary,
    states: { from, to },
  } = scrollAnimation;
  const newState: Array<number> = [];
  for (let i = 0; i < from.length; i++) {
    if (from[i] === to[i]) {
      newState.push(to[i]);
    } else {
      const y = linearEquation(scrollY, { x: scrollBoundary[0], y: from[i] }, { x: scrollBoundary[1], y: to[i] });
      newState.push(y);
    }
  }
  manipulateDirectly(object3D, newState);
}

function handleScrollIpad(scrY0to1: number, ipad: Object3D, scrollAnimationIpad: ScrollAnimationElement3D) {
  const scrollAnimations = scrollAnimationIpad.scrollAnimations;
  const lastScrollAnimation = scrollAnimations[scrollAnimations.length - 1];
  if (scrY0to1 > lastScrollAnimation.scrollBoundary[1]) {
    manipulateDirectly(ipad, lastScrollAnimation.states.to);
  } else {
    for (const sa of scrollAnimations) {
      if (scrY0to1 < sa.scrollBoundary[0]) {
        manipulateDirectly(ipad, sa.states.from);
        break;
      } else if (scrY0to1 <= sa.scrollBoundary[1]) {
        manipulateLinearly(scrY0to1, ipad, sa);
        break;
      }
    }
  }
}

function handleScrollClone(
  scrY0to1: number,
  clones: Array<Object3D>,
  scrollAnimationCloneArr: Array<ScrollAnimationElement3D>
) {
  clones.forEach((clone, i) => {
    const scrollAnimations = scrollAnimationCloneArr[i].scrollAnimations;
    const lastScrollAnimation = scrollAnimations[scrollAnimations.length - 1];
    if (scrY0to1 > lastScrollAnimation.scrollBoundary[1]) {
      // 지나감
      manipulateDirectly(clone, lastScrollAnimation.states.to);
    } else {
      for (const sa of scrollAnimations) {
        if (scrY0to1 < sa.scrollBoundary[0]) {
          manipulateDirectly(clone, sa.states.from);
          break;
        } else if (scrY0to1 <= sa.scrollBoundary[1]) {
          manipulateLinearly(scrY0to1, clone, sa);
          break;
        }
      }
    }
  });
}

export { handleScrollIpad, handleScrollClone };
