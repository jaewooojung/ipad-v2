import { html } from "lit";

function createNavLink(id: string, name: string, onClickLink: (sectionName: string) => void) {
  return html`<li
    @click="${() => onClickLink(name)}"
    class="relative px-5 py-1 border border-solid border-white rounded-3xl overflow-hidden cursor-pointer hover:bg-white"
  >
    <div id=${id} class="absolute inset-0 bg-white origin-left scale-x-0"></div>
    <span class="text-xl tracking-widest mix-blend-difference">${name}</span>
  </li>`;
}

export default createNavLink;
