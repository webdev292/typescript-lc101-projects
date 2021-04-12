"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    ;
    ;
    Rocket.prototype.sumMass = function (items) {
        var itemTotalMass = 0;
        if (items && items.length) {
            items.map(function (item) {
                itemTotalMass += item.massKg;
            });
        }
        return itemTotalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var astMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        return cargoMass + astMass > 0 ? cargoMass + astMass : 0;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
