"use strict";
//namearray
let Guest = ["Farrukh", "Alish", "Fajer", "Yasir"];
//cannotcome
let canNotattend = "Alish";
//console.log(`${canNotattend} cannot make today for dinner.`);
//new guest list
let newguest = "eman";
Guest[Guest.indexOf(canNotattend)] = newguest;
console.log("wellcome all we found bigger table");
Guest.unshift("Aliza");
let middleguest = "Alina";
let middleindex = Guest.length / 2;
Guest.splice(middleindex, 0, middleguest);
Guest.push("eman");
Guest.map((item) => console.log(`\nDear ${item} you are invited for dinner!`));
