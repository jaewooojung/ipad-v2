import { html, render } from "lit";
import createFooter from "./footer";

import createHeader from "./header";
import createMain from "./main";

function Root() {
  const header = createHeader();
  const main = createMain();
  // const footer = createFooter();
  const root = html`<div id="root" class="px-4 lg:px-10">${header}${main}</div>`;
  render(root, document.body);
}

export default Root;
