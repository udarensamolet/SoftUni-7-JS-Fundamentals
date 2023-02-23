function classVehicle() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = {...parts, quality: parts.engine * parts.power};
      this.fuel = fuel;
      this.drive = fuelLoss => {
        this.fuel -= Number(fuelLoss);
      }
    }

    type = "";
    model = "";
    parts = {
        engine: 0,
        power: 0,
        quality: 0
    }
    fuel = 0;
  }
}