import { html } from "lit";

function createNavLink(id: string, name: string) {
  return html`<li
    class="relative px-5 py-1 border border-solid border-white rounded-3xl overflow-hidden cursor-pointer hover:bg-white"
  >
    <div id="navlink-animated-${id}" class="absolute inset-0 bg-white origin-left scale-x-0"></div>
    <span class="text-xl tracking-widest mix-blend-difference">${name}</span>
  </li>`;
}

export default createNavLink;
