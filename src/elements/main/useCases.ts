import { html } from "lit";

function createUseCaeses(height_vh: number) {
  const useCases = html`<section id="useCases" style="height:${height_vh}vh"></section>`;
  return useCases;
}

export default createUseCaeses;
