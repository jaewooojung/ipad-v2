class Sizes {
  private width: number;
  private height: number;
  private pixelRatio: number;
  constructor(container: HTMLDivElement) {
    this.width = container.clientWidth;
    this.height = container.clientHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }

  getSizes() {
    return { width: this.width, height: this.height, pixelRatio: this.pixelRatio };
  }

  onResize() {
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    return { width: this.width, height: this.height, pixelRatio: this.pixelRatio };
  }
}

export default Sizes;
