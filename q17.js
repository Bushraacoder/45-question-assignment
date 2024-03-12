"use strict";
//namearray
let Guest = ["Farrukh", "Alish", "Fajer", "Yasir"];
//cannotcome
let canNotattend = "Alish";
//console.log(`${canNotattend} cannot make today for dinner.`);
//new guest list
let newguest = "eman";
Guest[Guest.indexOf(canNotattend)] = newguest;
Guest.unshift("Aliza");
let middleguest = "Alina";
let middleindex = Guest.length / 2;
Guest.splice(middleindex, 0, middleguest);
Guest.push("eman");
console.log("we can invite only two peoplr for dinner.");
while (Guest.length > 2) {
    let removeguest = Guest.pop();
    console.log(`\n sorry ${removeguest} we can't invite you to dinner!`);
}
console.log(Guest);
Guest.map((item) => console.log(`\n${item} you are still invited to dinner!`));
Guest.pop();
Guest.pop();
console.log(Guest);
