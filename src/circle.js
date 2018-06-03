import {Shape} from './shape';

export class Circle extends Shape {
  constructor(color, initX, initY, initRadius) {
    super (color, initX, initY);
    this.initRadius = initRadius;
  }

  getRadius() {
    return (`radius: ${this.initRadius}`);
  }

  setRadius(val) {
    this.initRadius = val;
  }

  draw() {
    console.log(`Drawing a Circle at:
${this.getCoords()}
With dimentions:
${this.getRadius()}
Filled with color: ${this.getColor()}`)
  }
}
