// Factory Pattern provides an interface for creating objects without specifying their exact class or type.
// This pattern is useful when the code needs to create instances of various subclasses, 
// or when there's a need to encapsulate the logic for object creation to facilitate extensibility and flexibility.

// we will create a simple vehicle manufacturing system, 
// where the factory can produce different types of vehicles like cars, trucks, and motorcycles based on a given type. 
// our goal is to create a structure that allows us to add new types of vehicles in the future without affecting the existing code.

interface Vehicle {
    type: string;
    manufacture(): void;
}

class Car implements Vehicle {
    public type: string = 'car';

    manufacture(): void {
        console.log('manufacturing a car');
    }
}

class Truck implements Vehicle {
    public type: string = 'truck';

    manufacture(): void {
        console.log('manufacturing a truck');
    }
}

class Motorcycle implements Vehicle {
    public type: string = 'motorcycle';

    manufacture(): void {
        console.log('manufacturing a motorcycle');
    }
}

// it is the factory class which we will use to create every type of vehicles;
class VehicleFactory {
    static createVehicle(vehicleType: string): Vehicle {
        switch (vehicleType) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            case 'motorcycle':
                return new Motorcycle();
            default:
                throw new Error(`invalid vehicle type: ${vehicleType}`);
        }
    }
}

// it is the function to interact with the user to having new vehicles;
function produceVehicles( types: string[]): void {
    const vehicles = types.map((type: string) => VehicleFactory.createVehicle(type));

    vehicles.forEach(vehicle => {
        console.log(`started to produce ${vehicle.type}`);
        // calling manufacture method to manufacture new vehicle
        vehicle.manufacture(); 
    });
}

// this array contains the vehicles we want to produce;
const vehicleTypes = ['car', 'truck', 'motorcycle', 'car'];
produceVehicles( vehicleTypes);