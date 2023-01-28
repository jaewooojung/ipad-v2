import { html } from "lit";

import createBox from "./box";

function createIntro(height_vh: number) {
  const intro = html`<section id="intro" style="height:${height_vh}vh">
    <div class="sticky top-0 w-full h-screen">
      <div class="absolute inset-0">
        <div class="w-full h-full flex justify-center items-center">
          <div id="intro-beyondWords" class="text-6xl text-center sm:text-10xl">
            <div class="mb-10">
              <span class="bg-clip-text bg-cover bg-gradient-to-b from-white via-white to-gray-900 text-transparent"
                ><simple-greeting>Beyond</simple-greeting></span
              >
            </div>
            <div>Words</div>
          </div>
          <div id="intro-mouseWheelIcon" class="absolute bottom-10 text-center">
            <div class="w-5 h-9 flex justify-center items-center border border-solid border-white rounded-xl">
              <div class="w-1 h-3 rounded-xl bg-white animate-flowdown"></div>
            </div>
            <div class="rotate-180">^</div>
          </div>
        </div>
      </div>
      <div class="absolute inset-0">
        <div class="w-full h-full flex flex-col justify-center items-center text-center leading-normal">
          <div id="intro-ipad" class="opacity-0 text-5xl sm:text-9xl">i - Pad</div>
          <div id="intro-thefirst" class="opacity-0 text-2xl sm:text-3xl">
            The first smart tactile graphics display for the visually impaired.
          </div>
        </div>
      </div>
      <div class="absolute inset-0">
        <div class="w-full h-full grid grid-rows-4 grid-cols-1 font-bold sm:grid-rows-3 sm:grid-cols-4 sm:gap-8">
          <div
            id="intro-access"
            class="opacity-0 row-start-1 row-end-2 self-center text-3xl sm:col-start-1 sm:col-end-5 sm:text-7xl"
          >
            Access visual content from any source.
          </div>
          <div
            id="intro-creation-mobility-camera"
            class="opacity-0 row-start-2 row-end-5 sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-4 flex flex-col sm:flex-row sm:justify-between sm:gap-10"
          >
            ${createBox(
              "Creation",
              "For the first time, you can feel your handwriting, sketches, signature, and more. Dot Pad can convert any input on the connected device into a tactile graphic instantly."
            )}
            ${createBox(
              "Mobility",
              "Get around independently with tactile maps. The Dot Pad technology is permanently installed in the public transportation kiosks of Busan, Korea."
            )}
            ${createBox(
              "Camera",
              "With the smartphone camera, you can turn your surroundings into tactile graphics in real-time, unlocking a whole new way to experience the world."
            )}
          </div>
        </div>
      </div>
    </div>
  </section>`;
  return intro;
}

export default createIntro;
