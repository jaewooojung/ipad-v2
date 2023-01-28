import { html } from "lit";

function createBox(title: string, desc: string) {
  const box = html`<div class="flex-1 overflow-auto">
    <div class="sm:mb-4"><span class="text-lg sm:text-4xl">${title}</span></div>
    <div class="text-sm sm:text-2xl">${desc}</div>
  </div>`;
  return box;
}

export default createBox;
