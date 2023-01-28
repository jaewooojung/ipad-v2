import { html } from "lit";

function createBox(title: string, desc: string) {
  const box = html`<div class="mr-7 w-5/6 sm:w-1/5 shrink-0">
    <div class="mb-4"><span class="text-2xl sm:text-4xl">${title}</span></div>
    <div><span class="text-xl">${desc}</span></div>
  </div>`;
  return box;
}

export default createBox;
