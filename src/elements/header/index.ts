import { html } from "lit";

import Manipulator2D from "../../Manipulator2D";
import { ScrollAnimationElement } from "../../Manipulator2D/types";
import { sectionDatas, total_vh } from "../sectiondatas";

const headerLinkIntro: ScrollAnimationElement = {
  elementId: "header-link-intro",
  scrollAnimations: [
    {
      scrollBoundary: [sectionDatas[0].scrollBoundary[0], sectionDatas[0].scrollBoundary[1]],
      keyframes: [{ name: "scaleX", from: 0, to: 1 }],
    },
    {
      scrollBoundary: [sectionDatas[0].scrollBoundary[1], sectionDatas[0].scrollBoundary[1]],
      keyframes: [{ name: "scaleX", from: 1, to: 0 }],
    },
  ],
};

const headerLinkFeatures: ScrollAnimationElement = {
  elementId: "header-link-features",
  scrollAnimations: [
    {
      scrollBoundary: [sectionDatas[1].scrollBoundary[0], sectionDatas[1].scrollBoundary[1]],
      keyframes: [{ name: "scaleX", from: 0, to: 1 }],
    },
    {
      scrollBoundary: [sectionDatas[1].scrollBoundary[1], sectionDatas[1].scrollBoundary[1]],
      keyframes: [{ name: "scaleX", from: 1, to: 0 }],
    },
  ],
};

const headerLinkUseCases: ScrollAnimationElement = {
  elementId: "header-link-useCases",
  scrollAnimations: [
    {
      scrollBoundary: [sectionDatas[2].scrollBoundary[0], sectionDatas[2].scrollBoundary[1]],
      keyframes: [{ name: "scaleX", from: 0, to: 1 }],
    },
    {
      scrollBoundary: [sectionDatas[2].scrollBoundary[1], sectionDatas[2].scrollBoundary[1]],
      keyframes: [{ name: "scaleX", from: 1, to: 0 }],
    },
  ],
};

const headerLinkContact: ScrollAnimationElement = {
  elementId: "header-link-contact",
  scrollAnimations: [
    {
      scrollBoundary: [
        sectionDatas[3].scrollBoundary[0],
        sectionDatas[3].scrollBoundary[1] * ((total_vh - 100) / total_vh),
      ],
      keyframes: [{ name: "scaleX", from: 0, to: 1 }],
    },
  ],
};

const scrollAnimations = [headerLinkIntro, headerLinkFeatures, headerLinkUseCases, headerLinkContact];

Manipulator2D.getInstance().addScrollAnimationElement(scrollAnimations);

function createNavLink(id: string, name: string) {
  return html`<li
    class="relative px-5 py-1 border border-solid border-white rounded-3xl overflow-hidden cursor-pointer hover:bg-white"
  >
    <div id=${id} class="absolute inset-0 bg-white origin-left scale-x-0"></div>
    <span class="text-xl tracking-widest mix-blend-difference">${name}</span>
  </li>`;
}

function createHeader() {
  const header = html`<header class="fixed top-0 left-0 z-10 w-full lg:pr-10">
    <div class="p-4 h-header-height flex justify-between items-center bg-black lg:p-10 lg:h-header-height-lg">
      <div><span class="text-3xl lg:text-5xl">iPad</span></div>
      <nav>
        <div id="mobile-hamburgur" class="block lg:hidden">
          <button class="w-5 h-5 flex flex-col justify-between bg-transparent">
            <div class="w-full h-[2px] bg-white"></div>
            <div class="w-full h-[2px] bg-white"></div>
            <div class="w-full h-[2px] bg-white"></div>
          </button>
        </div>
        <ul class="hidden lg:flex lg:gap-5">
          ${createNavLink(headerLinkIntro.elementId, "Ipad")} ${createNavLink(headerLinkFeatures.elementId, "Features")}
          ${createNavLink(headerLinkUseCases.elementId, "Use cases")}
          ${createNavLink(headerLinkContact.elementId, "Contact")}
        </ul>
      </nav>
    </div>
  </header>`;
  return header;
}

export default createHeader;

// DomDatas.getInstance()
//   .getSectionDatas()
// .map((sd) => createNavLink(sd.id, sd.name))}
