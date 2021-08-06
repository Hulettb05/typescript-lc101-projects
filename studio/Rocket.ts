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
    currentMassKg(){

    }
    canAdd(item: Payload){

    }
    addCargo(cargo: Cargo){

    }
    addAstronaut(astronaut: Astronaut){

    }
}