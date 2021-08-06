"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumOfItems = 0;
        for (var index = 0; index < items.length; index) {
            var item = items[index];
            sumOfItems += item.massKg;
        }
        return sumOfItems;
    };
    Rocket.prototype.currentMassKg = function () {
        var output = 0;
        for (var _i = 0, _a = this.astronauts; _i < _a.length; _i++) {
            var astronaut = _a[_i];
            output += astronaut.massKg;
        }
        for (var _b = 0, _c = this.cargoItems; _b < _c.length; _b++) {
            var item = _c[_b];
            output += item.massKg;
        }
        return output;
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
