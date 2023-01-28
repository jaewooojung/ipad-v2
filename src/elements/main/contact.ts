import { html } from "lit";

function createContact(height_vh: number) {
  const contact = html`<section id="contact" style="height:${height_vh}vh"></section>`;
  return contact;
}

export default createContact;
