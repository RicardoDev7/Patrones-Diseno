import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    displayConfiguration(){
        console.log(`
          CPU: ${this.cpu}
          RAM: ${this.ram}
          Storage: ${this.storage}
          GPU: ${this.gpu || 'Not defined'}
        `);
    }
}

class ComputerBuilder {
    private computer = new Computer();

    setCpu(cpu: string) : ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRam(ram: string) : ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string) : ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGpu(gpu: string) : ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build() : Computer {
        return this.computer;
    }
}

function main(){
    const basicComputer = new ComputerBuilder()
    .setCpu('Intel Core 2 Duo')
    .setRam('4 GB')
    .setStorage('256 GB').build();
    console.log('%cComputer Configuration:', COLORS.red);
    basicComputer.displayConfiguration();

    const gamerComputer = new ComputerBuilder()
    .setCpu('AMD Ryzen 9 5900X')
    .setRam('64GB')
    .setStorage('2TB')
    .setGpu('NVIDIA RTX 5090X').build();
    console.log('%cComputer Configuration:', COLORS.blue);
    gamerComputer.displayConfiguration();
}

main();