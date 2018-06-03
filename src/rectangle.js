import {Shape} from './shape';

export class Rectangle extends Shape {
  constructor(color, initX, initY, initWidth, initHeight) {
    super (color, initX, initY);
    this.initWidth = initWidth;
    this.initHeight = initHeight;
  }

  setWidth(newWidth) {
    this.initWidth = newWidth;
  }

   setHeight(newHeight) {
     this.initHeight = newHeight;
   }

  getDims() {
    return (`width: ${this.initWidth}
    height: ${this.initHeight}`);
  }

  draw() {
    console.log(`Drawing a Rectangle at:
    ${this.getCoords()}
    With dimentions:
    ${this.getDims()}
    Filled with color: ${this.getColor()}`)
  }
}
