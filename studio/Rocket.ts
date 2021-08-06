import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket implements Payload {
    name: string;
    massKg: number;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass ( items: Payload[] ){
        var sumOfItems = 0;
        for (let index =0; index < items.length; index) {
            var item = items[index];
            sumOfItems+= item.massKg;
        }
        return sumOfItems;
    }
    currentMassKg(): number{
        let output: number = 0;
        for (let astronaut of this.astronauts) {
            output += astronaut.massKg;
        }
        for (let item of this.cargoItems) {
            output += item.massKg;
        }
        return output;

    }
    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);

    }
    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } 
        else { return false; }

    }
    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else { return false; }

    }
}