import { html } from "lit";
import { sectionDatas } from "../sectiondatas";

function createMobileNav(mobileNavId: string, onClickLink: (sectionName: string) => void) {
  const onClickClose = () => {
    const mobileNav = document.getElementById(mobileNavId) as HTMLDivElement;
    mobileNav.style.display = "none";
  };
  const moveAndClose = (sectionName: string) => {
    onClickClose();
    onClickLink(sectionName);
  };
  return html`<div id=${mobileNavId} class="hidden fixed inset-0 items-center bg-black">
    <ul class="relative m-auto w-full h-1/2 flex flex-col items-center gap-4">
      ${sectionDatas.map(
        (sd) =>
          html`<li @click="${() => moveAndClose(sd.name)}"><span class="text-2xl underline">${sd.name}</li></span>`
      )}
    </ul>
    <div @click=${onClickClose} class="absolute top-2 right-7">X</div>
  </div>`;
}

export default createMobileNav;
