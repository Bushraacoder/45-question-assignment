function make_great(magicians: string[] , message : string=" The great "): void {
    magicians.forEach((magician) => {
        console.log(message + magician);
    });
}

// Array of magician's names
const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the function to display magician names
make_great(magicianNames);