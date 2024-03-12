"use strict";
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Array of magician's names
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to display magician names
show_magicians(magicianNames);
