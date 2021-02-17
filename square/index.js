export class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return 4 * this.side;
  }
  area() {
    return this.side ** 2;
  }
  diagonal() {
    return this.side * Math.sqrt(2);
  }
  areaOfInCircle() {
    let radius = this.side / 2;
    return Math.PI * radius ** 2;
  }
  areaOfOutCircle() {
    let radius = this.diagonal() / 2;
    return Math.PI * radius ** 2;
  }
}
