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
}
