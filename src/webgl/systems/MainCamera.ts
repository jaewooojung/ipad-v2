import { PerspectiveCamera } from "three";
import Sizes from "./Sizes";

class MainCamera {
  private instance: PerspectiveCamera;

  constructor(sizes: Sizes) {
    const { width, height } = sizes.getSizes();
    this.instance = new PerspectiveCamera(75, width / height, 0.01, 10000);
    this.instance.position.set(0, 0, 10);
  }

  getCamera() {
    return this.instance;
  }

  onResize(width: number, height: number) {
    this.instance.aspect = width / height;
    this.instance.updateProjectionMatrix();
  }
}

export default MainCamera;
