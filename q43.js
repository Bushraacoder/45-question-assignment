"use strict";
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    const greatMagicians = [];
    magicians.forEach((magician) => {
        greatMagicians.push(`Great ${magician}`);
    });
    return greatMagicians;
}
// Original array of magician's names
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great with a copy of the original array
const greatMagicianNames = make_great([...magicianNames]);
// Display original magician names
console.log("Original Magician Names:");
show_magicians(magicianNames);
// Display magician names with "Great" added
console.log("\nMagician Names with 'Great' Added:");
show_magicians(greatMagicianNames);
