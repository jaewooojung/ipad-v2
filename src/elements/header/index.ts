import { html } from "lit";

import createNavLink from "./navLink";

import DomDatas from "../../Manipulator2D";

function createHeader() {
  const header = html`<header
    class="fixed inset-0 z-10 bottom-auto p-4 flex justify-between items-center bg-transparent sm:mr-10 sm:p-10"
  >
    <div><span class="text-3xl sm:text-5xl">iPad</span></div>
    <nav>
      <div id="mobile-hamburgur" class="block sm:hidden">
        <button class="w-5 h-5 flex flex-col justify-between bg-transparent">
          <div class="w-full h-[2px] bg-white"></div>
          <div class="w-full h-[2px] bg-white"></div>
          <div class="w-full h-[2px] bg-white"></div>
        </button>
      </div>
      <ul class="hidden sm:flex sm:gap-5">
        ${DomDatas.getInstance()
          .getSectionDatas()
          .map((sd) => createNavLink(sd.id, sd.name))}
      </ul>
    </nav>
  </header>`;
  return header;
}

export default createHeader;
