class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `Make:${this.make}  Model:${this.model}  Year:${this.year}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
      super(make, model, year);
      this.range = range;
    }

    getDescription() {
      return `${super.getDescription()}  Range:${this.range} miles`;
    }
}
const myFirstCar = new Car(`Toyota`, `Camry`, 1992);
const myElectricCar = new ElectricCar(`Tesla`, `Model S`, 2019, 300)
console.log(myFirstCar.getDescription());
console.log(myElectricCar.getDescription());