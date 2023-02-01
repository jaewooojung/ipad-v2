import { AmbientLight, Group, Object3D, Scene } from "three";
import { handleScrollIpad, initIpad } from "./objects/ipad";
import { handleScrollClone } from "./objects/clones";
import MainCamera from "./systems/MainCamera";
import Renderer from "./systems/Renderer";
import { createScene } from "./systems/scene";
import Sizes from "./systems/Sizes";

class ThreeApp {
  private scene: Scene;
  private sizes: Sizes;
  private mainCamera: MainCamera;
  private renderer: Renderer;
  private ipad: Object3D | null;
  private clones: Array<Object3D> | null;

  constructor(container: HTMLDivElement) {
    this.scene = createScene();
    this.sizes = new Sizes(container);
    this.mainCamera = new MainCamera(this.sizes);
    this.scene.add(this.mainCamera.getCamera());
    this.renderer = new Renderer(this.scene, this.mainCamera.getCamera());
    this.ipad = null;
    this.clones = null;
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
    if (this.ipad && this.clones) {
      handleScrollIpad(scrY0to1, this.ipad);
      handleScrollClone(scrY0to1, this.clones);
    }
    this.render();
  };

  private render = () => {
    this.renderer.render();
  };

  load = async () => {
    const { ipad, clones } = await initIpad();
    this.ipad = ipad;
    this.clones = clones;
    this.scene.add(this.ipad);

    this.render();
  };
}

export default ThreeApp;
