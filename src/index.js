import {Shape} from './shape';
import {Rectangle} from './rectangle';
import {Circle} from './circle';

const figure = new Shape("#000", 15, 85);
console.log(figure);
console.log(figure.getCoords());

const rectangle = new Rectangle('green', 10, 10, 100, 100);
console.log(rectangle);
rectangle.draw();

const circle = new Circle('#FF5722', 50, 50, 250);
console.log(circle);
circle.draw();
