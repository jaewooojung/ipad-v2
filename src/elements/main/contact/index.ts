import { html } from "lit";

import createFooter from "./footer";

function createBox(title: string, desc: string, linkText: string, linkSrc: string) {
  return html`<div class="mb-12 lg:mb-0">
    <div class="mb-4 lg:mb-8"><span class="font-bold lg:text-xl 2xl:text-3xl">${title}</span></div>
    <div class="mb-4 lg:mb-12 lg:h-32 2xl:h-44"><span class="lg:text-xl 2xl:text-2xl">${desc}</span></div>
    <div
      class="py-2 w-4/5 border border-orange-500 rounded-full text-center font-semibold bg-orange-500 transition-colors duration-150 cursor-pointer lg:py-4 lg:text-2xl hover:bg-transparent hover:text-orange-500"
    >
      <a href="${linkSrc}">${linkText}</a>
    </div>
  </div>`;
}

function createContact(height_vh: number) {
  const contact = html`<section id="contact" class="relative" style="height:${height_vh}vh">
    <div>
      <h1 class="text-3xl lg:text-5xl 2xl:text-8xl leading-loose">
        Feel the difference.<br />
        Make a difference.
      </h1>
    </div>
    <div class="mx-auto mb-40 w-full lg:w-3/4 flex flex-col lg:mb-80 lg:flex-row">
      ${createBox(
        "For Organizations",
        "To reach more people, we’re making the Dot Pad available to organizations for learning, productivity, support, and engagement.",
        "Get in touch",
        "#"
      )}
      ${createBox(
        "For Developers",
        "We’re on the lookout for talented developers to build for a brand new category of accessible, innovative apps that can impact millions of lives.",
        "Learn more",
        "#"
      )}
    </div>
    <div class="flex flex-col">
      <div class="mb-10 w-full lg:mb-0 lg:w-4/5">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/25/22/28/despaired-2261021_960_720.jpg"
          width="100%"
          height="100%"
        />
      </div>
      <div class="w-full lg:w-1/2 lg:self-end lg:-translate-y-28">
        ${createBox(
          "About Dot",
          "For years, Dot Inc. has been innovating with tactile communication and braille. With every device, the world became easier to navigate for the visually impaired. After the braille smartwatch, digital text translator, and AI braille translation engine comes the Dot Pad.",
          "Visit dotincorp.com",
          "#"
        )}
      </div>
    </div>
    ${createFooter()}
  </section>`;
  return contact;
}

export default createContact;
