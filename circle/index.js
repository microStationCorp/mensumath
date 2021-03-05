export class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    area() {
      return Math.PI * this.radius ** 2;
    }
    perimeter() {
      return 2 * this.radius * Math.PI;
    }
    areaOfInnerBiggestSquare() {
      let sDia = this.radius * 2;
      let sSide = sDia / Math.sqrt(2);
      return sSide ** 2;
  }
  }
  