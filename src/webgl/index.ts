import { AmbientLight, Group, Scene } from "three";
import getIpad from "./ipad";
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

  constructor(container: HTMLDivElement) {
    this.scene = createScene();
    this.sizes = new Sizes(container);
    this.mainCamera = new MainCamera(this.sizes);
    this.scene.add(this.mainCamera.getCamera());
    this.renderer = new Renderer(this.scene, this.mainCamera.getCamera());
    this.ipad = new Group();
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
    const multiplier = this.sizes.getSizes().width < 640 ? 0.06 : width < 1024 ? 0.09 : 0.13;
    this.ipad.scale.set(multiplier, multiplier, multiplier);
    this.render();
  };

  private render = () => {
    this.renderer.render();
  };

  load = async () => {
    const gltf = await getIpad();
    this.ipad.add(gltf);
    this.scene.add(this.ipad);
    this.render();
  };
}

export default ThreeApp;
