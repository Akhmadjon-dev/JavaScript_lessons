class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  get() {
    return `bu moshinda ${this.model} modelda va ${this.year} - yilda chiqarilgan`;
  }
}

function sell(item) {
  return ` ${item} bu maxsulot sotildi!`;
}
const name = "sobir";

export { sell, name };

export default Car;
