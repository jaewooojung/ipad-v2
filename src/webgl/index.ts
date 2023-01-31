import { AmbientLight, Group, Scene } from "three";
import { ScrollAnimationElement } from "../Manipulator2D/datas";
import { handleScrollIpad, initIpad } from "./objects/ipad";
import MainCamera from "./systems/MainCamera";
import Renderer from "./systems/Renderer";
import { createScene } from "./systems/scene";
import Sizes from "./systems/Sizes";

class ThreeApp {
  private scene: Scene;
  private sizes: Sizes;
  private mainCamera: MainCamera;
  private renderer: Renderer;
  private ipad: Group;
  private ipadSAE: ScrollAnimationElement | null;

  constructor(container: HTMLDivElement) {
    this.scene = createScene();
    this.sizes = new Sizes(container);
    this.mainCamera = new MainCamera(this.sizes);
    this.scene.add(this.mainCamera.getCamera());
    this.renderer = new Renderer(this.scene, this.mainCamera.getCamera());
    this.ipad = new Group();
    this.ipadSAE = null;
    const canvas = this.renderer.getRenderer().domElement;
    container.append(canvas);

    const light = new AmbientLight("white", 10);
    this.scene.add(light);

    this.onResize();
  }

  onResize = () => {
    const { width, height, pixelRatio } = this.sizes.onResize();
    this.mainCamera.onResize(width, height);
    this.renderer.onResize(width, height, pixelRatio);
    this.render();
  };

  onScroll = (scrY0to1: number) => {
    if (this.ipad && this.ipadSAE) {
      handleScrollIpad(scrY0to1, this.ipadSAE, this.ipad);
    }
    this.render();
  };

  private render = () => {
    this.renderer.render();
  };

  load = async () => {
    const { temp: ipadScene, scrollAnimationElement: ipadSAE } = await initIpad();
    this.ipad.add(ipadScene);
    this.ipadSAE = ipadSAE;

    this.scene.add(this.ipad);

    this.render();
  };
}

export default ThreeApp;
