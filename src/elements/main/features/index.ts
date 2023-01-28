import { html } from "lit";

import createBox from "./box";

function createFeatures(height_vh: number) {
  const features = html`<section id="features" style="height:${height_vh}vh">
    <div class="sticky top-0 w-full h-screen">
      <div class="absolute inset-0">
        <div class="w-full h-full flex items-end sm:items-center">
          <div id="features-dotimage" class="opacity-0 mb-20 sm:w-2/3 sm:mb-0">
            <div class="mb-5 sm:mb-10"><span class="sm:text-4xl">Dot Image Processor</span></div>
            <div class="sm:text-6xl">
              The innovative processor uses AI to analyze and segment images to produce tactile graphics best suited for
              visually impaired users.
            </div>
          </div>
          <div id="features-visualinput" class="opacity-0 absolute bottom-3/4 sm:bottom-10">
            <span class="sm:text-2xl font-bold tracking-tighter">
              Visual Input → Content Detection → Semantic Rendering → Tactile mapping</span
            >
          </div>
        </div>
      </div>
      <div class="absolute inset-0">
        <div class="w-full h-full flex items-end sm:justify-end sm:items-center">
          <div id="features-interact" class="opacity-0 mb-20 sm:mb-0 sm:w-1/2">
            <div class="mb-5 sm:mb-10">
              <span class="sm:text-4xl">Interact with the graphics and explore every detail.</span>
            </div>
            <div class="sm:text-6xl">
              Simple intuitive controls along with a text-to-braille panel built-in for your comfort.
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-0">
        <div id="features-asimplebluetooth" class="opacity-0 w-full h-full flex justify-center items-center">
          <div class="w-full text-center sm:w-1/2">
            <span class="text-2xl sm:text-7xl sm:leading-relaxed">
              A simple bluetooth connection and boom. The App Store at your desk — the same 2.2 million apps, now
              accessible like never before.</span
            >
          </div>
        </div>
      </div>
      <div class="absolute inset-0">
        <div class="w-full h-full px-5 py-24 flex flex-col justify-between overflow-hidden sm:py-48">
          <div class="flex-[3] flex sm:justify-end">
            <div id="features-gamechanging" class="opacity-0 w-full sm:w-1/2">
              <span class="text-3xl sm:text-7xl font-bold leading-normal"
                >Game-changing features that fit in your backpack.</span
              >
            </div>
          </div>
          <div
            id="features-black-curtain"
            class="z-10 hidden absolute top-0 left-0 bottom-0 w-1/2 sm:block"
            style="background: linear-gradient(to right, black 30%, transparent)"
          ></div>
          <div id="features-dotactuator" class="flex-[2] w-full flex translate-x-full sm:pt-24">
            ${createBox("Dot Actuator 3.0", "Patented actuator technology based on electromagnetism.")}
            ${createBox("iOS & iPadOS Integration", "Works seamlessly with iOS/iPad OS 15.2 and higher.")}
            ${createBox(
              "Dot Image Processor",
              "An AI based processor that renders the most meaningful tactile output."
            )}
            ${createBox(
              "Intuitive Control Elements",
              "Take control of the content with six freely assignable buttons."
            )}
            ${createBox("Dot Image Explorer", "Explore, zoom, pan, invert, and rotate content directly on device.")}
            ${createBox("Connectivity", "Classic USB-C and and Bluetooth LE for power supply and data transfer.")}
            ${createBox(
              "Portability",
              "Sized at 273 x 228 x 16 mm, weighs 1200 g, so you can take it everywhere with ease."
            )}
          </div>
        </div>
      </div>
    </div>
  </section>`;
  return features;
}

export default createFeatures;
