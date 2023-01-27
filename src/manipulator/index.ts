import { linearEquation } from "../utils/math";

function manipulateDirectly(dom: HTMLElement, name: string, value: number) {
  if (name === "opacity") {
    dom.style.opacity = value + "";
  } else if (name === "translateY") {
    dom.style.transform = `translateY(${value}px)`;
  } else if (name === "scale") {
    dom.style.transform = `scale(${value})`;
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
  if (name === "opacity") {
    dom.style.opacity = y + "";
  } else if (name === "translateY") {
    dom.style.transform = `translateY(${y}px)`;
  } else if (name === "scale") {
    dom.style.transform = `scale(${y})`;
  }
}

export { manipulateDirectly, manipulateLinearly };
