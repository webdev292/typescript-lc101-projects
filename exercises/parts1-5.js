"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
let spacecraftName = 'Determination';
let speedMph = 17500;
let kilometersToMars = 225000000;
let kilometersToTheMoon = 384400;
let milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
const milesToMars = kilometersToMars * milesPerKilometer;
const hoursToMars = milesToMars / speedMph;
const daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
class Spacecraft {
    constructor(name, speed) {
        this.milesPerKilometer = 0.621;
        this.name = '';
        this.speedMph = 0;
        this.getDaysToLocation = function (kilometersAway) {
            const milesAway = kilometersAway * milesPerKilometer;
            ;
            const hoursToLocation = milesAway / speedMph;
            const daysToLocation = hoursToLocation / 24;
            return daysToLocation;
        };
        this.name = name;
        this.speedMph = speed;
    }
    printDaysToLocation(location) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
//# sourceMappingURL=parts1-5.js.map