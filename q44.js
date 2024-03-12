"use strict";
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}
// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Swiss Cheese", "Avocado");
