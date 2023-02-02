import { html } from "lit";

import Manipulator2D from "../../Manipulator2D";
import { ScrollAnimationElement, SectionData } from "../../Manipulator2D/types";
import { sectionDatas, total_vh } from "../sectiondatas";
import createMobileNav from "./mobileNav";
import createNavLink from "./navLink";

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

function createHeader() {
  const mobileNavId = "mobile-nav";

  const onClickLink = (sectionName: string) => {
    const targetSection = sectionDatas.find((sd) => sd.name === sectionName) as SectionData;
    const temp =
      sectionName === "Features" ? targetSection.scrollBoundary[0] * 1.2 : targetSection.scrollBoundary[0] * 1.01;
    const scrollY = document.body.scrollHeight * temp;
    document.body.scrollTo(0, scrollY);
  };
  const onClickHamburger = () => {
    const mobileNav = document.getElementById(mobileNavId) as HTMLDivElement;
    mobileNav.style.display = "flex";
  };

  const header = html`<header class="fixed top-0 left-0 right-[20px] z-10">
    <div class="px-2 h-header-height flex justify-between items-center lg:px-10 lg:h-header-height-lg">
      <div><span class="text-3xl lg:text-5xl">iPad</span></div>
      <nav class="relative">
        <div id="mobile-hamburgur" @click=${onClickHamburger} class="block lg:hidden">
          <button class="w-5 h-5 flex flex-col justify-between bg-transparent">
            <div class="w-full h-[2px] bg-white"></div>
            <div class="w-full h-[2px] bg-white"></div>
            <div class="w-full h-[2px] bg-white"></div>
          </button>
        </div>
        <ul class="hidden lg:flex lg:gap-5">
          ${createNavLink(headerLinkIntro.elementId, sectionDatas[0].name, onClickLink)}
          ${createNavLink(headerLinkFeatures.elementId, sectionDatas[1].name, onClickLink)}
          ${createNavLink(headerLinkUseCases.elementId, sectionDatas[2].name, onClickLink)}
          ${createNavLink(headerLinkContact.elementId, sectionDatas[3].name, onClickLink)}
        </ul>
        ${createMobileNav(mobileNavId, onClickLink)}
      </nav>
    </div>
  </header>`;
  return header;
}

export default createHeader;

// DomDatas.getInstance()
//   .getSectionDatas()
// .map((sd) => createNavLink(sd.id, sd.name))}
