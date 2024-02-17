function Vehicle(brand,model,speed,fuelType){
    this.brand = brand,
    this.model = model,
    this.speed = speed,
    this.fuelType = fuelType,
    this.accelerate = function(){
        return ++(this.speed);
    }
    this.brake = function(){
        return --(this.speed);
    }
    this.refuel = function(){
        console.log("Vehicle is refueling");
    }
}



function Car(brand,model,speed,fuelType,numberOfWheels){
    Vehicle.call(this,brand,model,speed,fuelType);
    this.numberOfWheels = numberOfWheels,
    this.honk = function honk(){
        console.log("Honking sound")
    }
}

let car1 = new Car("kia","2345A",180,"petrol",4);
car1.refuel();
console.log(car1.accelerate());
console.log(car1.brake());




function Airplane(brand,model,speed,fuelType,numberOfEngines,hasLandingGear){
    Vehicle.call(this,brand,model,speed,fuelType);
    this.numberOfEngines = numberOfEngines,
    this.hasLandingGear = hasLandingGear,
    this.takeOff = function(){
        console.log("Airplane is taking off")
    }
}

let Airplane1 = new Airplane("Indigo","239845A",18000,"jetFuel",4,true);
console.log(Airplane1.accelerate());
console.log(Airplane1.brake());
Airplane1.refuel();
Airplane1.takeOff();


