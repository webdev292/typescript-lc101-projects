import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
    name:string
    totalCapacityKg:number
    cargoItems:Cargo[] = [];;
    astronauts:Astronaut[] = [];;

    constructor(name:string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]):number {
        let itemTotalMass:number=0;
        if(items && items.length){
        items.map(function(item){
            itemTotalMass += item.massKg;
        });
    }
        return itemTotalMass;
    }

    currentMassKg():number {
        const astMass = this.sumMass(this.astronauts);
        const cargoMass = this.sumMass(this.cargoItems);
        return cargoMass+astMass > 0 ? cargoMass+astMass:0;
    }

    canAdd(item:Payload):boolean {
        return this.currentMassKg()+item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo:Cargo):boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut:Astronaut):boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}