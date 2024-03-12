"use strict";
function make_great(magicians, message = " The great ") {
    magicians.forEach((magician) => {
        console.log(message + magician);
    });
}
// Array of magician's names
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to display magician names
make_great(magicianNames);
