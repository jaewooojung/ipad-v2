import { html } from "lit";

import Manipulator2D from "../../../Manipulator2D";
import { ScrollAnimation, sectionDatas } from "../../../Manipulator2D/datas";
import { checkScrollBoundary } from "../../../utils/devOnly";

import { getFeaturesDotactuator } from "../../../Manipulator2D/responsiveData";

const featuresGamechanging: ScrollAnimation = {
  id: "features-gamechanging",
  animations: [
    {
      scrollBoundary: [0.49, 0.51],
      values: [{ name: "opacity", from: 0, to: 1 }],
    },
    {
      scrollBoundary: [0.53, 0.55],
      values: [{ name: "opacity", from: 1, to: 0 }],
    },
  ],
};

const featuresBlackcurtain: ScrollAnimation = {
  id: "features-black-curtain",
  animations: [
    {
      scrollBoundary: [0.49, 0.49001],
      values: [{ name: "opacity", from: 0, to: 1 }],
    },
    {
      scrollBoundary: [0.54999, 0.55],
      values: [{ name: "opacity", from: 1, to: 0 }],
    },
  ],
};

const featuresDotactuator = getFeaturesDotactuator(document.body.clientWidth);

const scrollAnimations = [featuresGamechanging, featuresBlackcurtain, featuresDotactuator];

if (import.meta.env.DEV) {
  checkScrollBoundary(sectionDatas[1], scrollAnimations);
}

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

function createBox(title: string, desc: string) {
  const box = html`<div class="mr-7 w-5/6 lg:w-1/5 shrink-0">
    <div class="mb-4"><span class="text-xl lg:text-2xl 2xl:text-4xl">${title}</span></div>
    <div><span class="">${desc}</span></div>
  </div>`;
  return box;
}

function createPhaseFour() {
  return html`<div class="absolute inset-0">
    <div class="w-full h-full px-5 py-24 flex flex-col justify-between overflow-hidden lg:py-48">
      <div class="flex-[3] flex lg:justify-end">
        <div id=${featuresGamechanging.id} class="opacity-0 w-full lg:w-1/2">
          <span class="text-3xl font-bold leading-normal xl:text-5xl 2xl:text-7xl"
            >Game-changing features that fit in your backpack.</span
          >
        </div>
      </div>
      <div
        id=${featuresBlackcurtain.id}
        class="z-10 hidden absolute top-0 left-0 bottom-0 w-1/2 lg:block"
        style="background: linear-gradient(to right, black 30%, transparent)"
      ></div>
      <div id=${featuresDotactuator.id} class="flex-[2] w-full flex translate-x-full lg:pt-24">
        ${createBox("Dot Actuator 3.0", "Patented actuator technology based on electromagnetism.")}
        ${createBox("iOS & iPadOS Integration", "Works seamlessly with iOS/iPad OS 15.2 and higher.")}
        ${createBox("Dot Image Processor", "An AI based processor that renders the most meaningful tactile output.")}
        ${createBox("Intuitive Control Elements", "Take control of the content with six freely assignable buttons.")}
        ${createBox("Dot Image Explorer", "Explore, zoom, pan, invert, and rotate content directly on device.")}
        ${createBox("Connectivity", "Classic USB-C and and Bluetooth LE for power supply and data transfer.")}
        ${createBox(
          "Portability",
          "Sized at 273 x 228 x 16 mm, weighs 1200 g, so you can take it everywhere with ease."
        )}
      </div>
    </div>
  </div>`;
}

export default createPhaseFour;
