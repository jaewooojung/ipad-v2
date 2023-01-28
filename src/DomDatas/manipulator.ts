import { linearEquation } from "../utils/math";
import { DynamicFunctions, ElementData, KeyframeType } from "./datas";

function manipulateDirectly(dom: HTMLElement, name: string, value: number) {
  if (name === "opacity") {
    dom.style.opacity = value + "";
  } else if (name === "translateY") {
    dom.style.transform = `translateY(${value}px)`;
  } else if (name === "scale") {
    dom.style.transform = `scale(${value})`;
  } else if (name === "translateX") {
    dom.style.transform = `translateX(${value}px)`;
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

function injectMethodToElement(elementDatas: Array<ElementData>) {
  const result = elementDatas.map((ed) => {
    const funcObj: DynamicFunctions = {};
    for (let i = 0; i < ed.animations.length; i++) {
      funcObj[`a${i}`] = (dom: HTMLElement, scrollY: number) => {
        ed.animations[i].values.forEach((value: KeyframeType) => {
          manipulateLinearly(dom, scrollY, value.name, ed.animations[i].scrollBoundary, [value.from, value.to]);
        });
      };

      funcObj[`a${i}-previous`] = (dom: HTMLElement) => {
        ed.animations[i].values.forEach((value: KeyframeType) => {
          manipulateDirectly(dom, value.name, value.from);
        });
      };
    }
    const lastIndex = ed.animations.length - 1;
    funcObj[`a${lastIndex}-next`] = (dom: HTMLElement) => {
      ed.animations[lastIndex].values.forEach((value: KeyframeType) => {
        manipulateDirectly(dom, value.name, value.to);
      });
    };
    return { ...ed, ...funcObj };
  });
  return result;
}

export { injectMethodToElement, manipulateDirectly, manipulateLinearly };
