import { linearEquation } from "../utils/math";
import { DynamicFunctions, ScrollAnimation, KeyframeType, ScrollAnimationElement } from "./datas";

function manipulateDirectly(dom: HTMLElement, name: string, value: number) {
  if (name === "opacity") {
    dom.style.opacity = value + "";
  } else if (name === "translateY") {
    dom.style.transform = `translateY(${value}px)`;
  } else if (name === "scale") {
    dom.style.transform = `scale(${value})`;
  } else if (name === "scaleX") {
    dom.style.transform = `scaleX(${value})`;
  } else if (name === "translateX") {
    dom.style.transform = `translateX(${value}px)`;
  } else if (name === "translateXPercent") {
    dom.style.transform = `translateX(${value}%)`;
  } else if (name === "translateYPercent") {
    dom.style.transform = `translateY(${value}%)`;
  }
}

function manipulateLinearly(
  dom: HTMLElement,
  scrollY: number,
  name: string,
  interval: Array<number>,
  value: Array<number>
) {
  const y = linearEquation(scrollY, { x: interval[0], y: value[0] }, { x: interval[1], y: value[1] });
  manipulateDirectly(dom, name, y);
}

/**
 * preprocessing
 * Element object마다 미리 스크롤 애니메이션을 정의해놓고
 * scroll이 boundary안에 들어오면 바로 실행한다.
 */
function injectScrollMethodToElement(scrollAnimation: ScrollAnimation): ScrollAnimationElement {
  const funcObj: DynamicFunctions = {};
  for (let i = 0; i < scrollAnimation.animations.length; i++) {
    funcObj[`a${i}`] = (dom: HTMLElement, scrollY: number) => {
      scrollAnimation.animations[i].values.forEach((value: KeyframeType) => {
        manipulateLinearly(dom, scrollY, value.name, scrollAnimation.animations[i].scrollBoundary, [
          value.from,
          value.to,
        ]);
      });
    };

    funcObj[`a${i}-previous`] = (dom: HTMLElement) => {
      scrollAnimation.animations[i].values.forEach((value: KeyframeType) => {
        manipulateDirectly(dom, value.name, value.from);
      });
    };
  }
  const lastIndex = scrollAnimation.animations.length - 1;
  funcObj[`a${lastIndex}-next`] = (dom: HTMLElement) => {
    scrollAnimation.animations[lastIndex].values.forEach((value: KeyframeType) => {
      manipulateDirectly(dom, value.name, value.to);
    });
  };
  return { ...scrollAnimation, ...funcObj };
}

export { injectScrollMethodToElement, manipulateDirectly, manipulateLinearly };
