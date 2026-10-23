import { COLORS } from '../helpers/colors.ts';

/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 * 
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 * 
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte que estos objetos se complementen entre sí.
 * 
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 * !Instrucciones:
 * 1. Completen las Clases de Productos:
    a. ElectricCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto eléctrico"
    b. GasCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto de combustión"
    c. ElectricEngine debe implmentar Engine y mostrar el mensaje "Arrancando el motor eléctrico"
    d. GasEngine debe implementar Engine y mostrar el mensaje "Arrancando el motor de combustión"

   2. Completen las Clases de Fábricas:
    a. ElectricVehicleFactory debe crear un ElectricCar y un ElectricEngine.
    b. GasVehicleFactory debe crear un GasCar y un GasEngine.

   3. Prueben el código:
    a. Ejecuten el código para asegurarse de que cada fábrica produce el tipo correspondiente.
 */

// 1. Interfaces de Vechicle y Engine

interface Vehicle {
    assemble(): void;
}

interface Engine {
    start(): void;
}

// 2. Clases concretas de Productos

class ElectricCar implements Vehicle {
    assemble(): void {
        console.log("Ensamblando un auto eléctrico");
    }
}

class GasCar implements Vehicle {
    assemble(): void {
        console.log("Ensamblando un auto de combustión");
    }
}

class ElectricEngine implements Engine {
    start(): void {
        console.log("Arrancando el motor eléctrico");
    }
}

class GasEngine implements Engine {
    start(): void {
        console.log("Arrancando el motor de combustión");
    }
}

// 3. Interfaz de la fábrica abstracta

interface VehicleFactory {
    createVehicle(): Vehicle;
    createEngine(): Engine;
}

// 4. Clases concretas de fábricas

class ElectricVehicleFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new ElectricCar();
    }

    createEngine(): Engine {
        return new ElectricEngine();
    }
}

class GasVehicleFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new GasCar();
    }

    createEngine(): Engine {
        return new GasEngine();
    }
}

// 5. Código Cliente

function main(factory: VehicleFactory) : void {
    const vehicle = factory.createVehicle();
    const engine = factory.createEngine();

    vehicle.assemble();
    engine.start();
}

// Pruebas

console.log('\n%cCreando vehiculo eléctrico...', COLORS.green);
main(new ElectricVehicleFactory());

console.log('\n\n%cCreando vehiculo de combustión...', COLORS.green);
main(new GasVehicleFactory());