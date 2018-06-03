export class Shape {
  constructor(color = "#fff", initX = 10, initY = 15) {
    this.color = color;
    this.initX = initX;
    this.initY = initY;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getCoords() {
    return (`(x: ${this.initX}, y: ${this.initY})`);
  }

  moveTo(initX, initY) {
    this.initX = initX;
    this.initY = initY;
  }
}
