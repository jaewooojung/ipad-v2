import { ScrollAnimationElement } from "./types";
import { linearEquation } from "../utils/math";

function manipulateDirectly(elementId: string, propertyName: string, value: number) {
  const element = document.getElementById(elementId) as HTMLElement; // dom element주소 모두 뽑아놓을것.
  if (propertyName === "opacity") {
    element.style.opacity = value + "";
  } else if (propertyName === "translateY") {
    element.style.transform = `translateY(${value}px)`;
  } else if (propertyName === "scale") {
    element.style.transform = `scale(${value})`;
  } else if (propertyName === "scaleX") {
    element.style.transform = `scaleX(${value})`;
  } else if (propertyName === "translateX") {
    element.style.transform = `translateX(${value}px)`;
  } else if (propertyName === "translateXPercent") {
    element.style.transform = `translateX(${value}%)`;
  } else if (propertyName === "translateYPercent") {
    element.style.transform = `translateY(${value}%)`;
  }
}

function manipulateLinearly(
  elementId: string,
  scrollY: number,
  scrollBoundary: Array<number>,
  propertyName: string,
  from: number,
  to: number
) {
  const y = linearEquation(scrollY, { x: scrollBoundary[0], y: from }, { x: scrollBoundary[1], y: to });
  manipulateDirectly(elementId, propertyName, y);
}

function handleScroll(scrY0to1: number, scrollAnimationElements: Array<ScrollAnimationElement>) {
  scrollAnimationElements.forEach((sae: ScrollAnimationElement) => {
    if (scrY0to1 > sae.scrollAnimations[sae.scrollAnimations.length - 1].scrollBoundary[1]) {
      // 지나감
      sae.scrollAnimations[sae.scrollAnimations.length - 1].keyframes.forEach((k) => {
        manipulateDirectly(sae.elementId, k.name, k.to);
      });
    } else {
      // 도착전
      for (const sa of sae.scrollAnimations) {
        if (scrY0to1 < sa.scrollBoundary[0]) {
          sa.keyframes.forEach((k) => {
            manipulateDirectly(sae.elementId, k.name, k.from);
          });
          break;
        } else if (scrY0to1 <= sa.scrollBoundary[1]) {
          sa.keyframes.forEach((k) => {
            manipulateLinearly(sae.elementId, scrY0to1, sa.scrollBoundary, k.name, k.from, k.to);
          });
          break;
        }
      }
    }
  });
}

export default handleScroll;
