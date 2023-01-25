import { AmbientLight, Scene } from "three";
import { getGltf } from "./systems/loader";
import MainCamera from "./systems/MainCamera";
import Renderer from "./systems/Renderer";
import { createScene } from "./systems/scene";
import Sizes from "./systems/Sizes";

class ThreeApp {
  private scene: Scene;
  private sizes: Sizes;
  private mainCamera: MainCamera;
  private renderer: Renderer;

  constructor(container: HTMLDivElement) {
    this.scene = createScene();
    getGltf().then((ipad) => {
      this.scene.add(ipad);
    });
    this.sizes = new Sizes(container);
    this.mainCamera = new MainCamera(this.sizes);
    this.scene.add(this.mainCamera.getCamera());
    this.renderer = new Renderer(this.scene, this.mainCamera.getCamera());
    const canvas = this.renderer.getRenderer().domElement;
    container.append(canvas);

    const light = new AmbientLight("white", 10);
    this.scene.add(light);

    this.onResize();
    window.addEventListener("resize", () => {
      this.onResize();
    });
  }

  private onResize = () => {
    const { width, height, pixelRatio } = this.sizes.onResize();
    this.mainCamera.onResize(width, height);
    this.renderer.onResize(width, height, pixelRatio);
  };

  private render = () => {
    this.renderer.render();
  };

  load = () => {
    // this.render();
    this.start();
  };

  private start = () => {
    this.renderer.getRenderer().setAnimationLoop(() => {
      this.render();
    });
  };
}

export default ThreeApp;
