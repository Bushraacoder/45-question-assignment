//namearray
let Guest:string[]=["Farrukh","Alish","Fajer","Yasir"];


//cannotcome
let canNotattend:string="Alish";
//console.log(`${canNotattend} cannot make today for dinner.`);

//new guest list
let newguest:string="eman";
Guest[Guest.indexOf(canNotattend)]=newguest;


console.log("wellcome all we found bigger table");
Guest.unshift("Aliza");


let middleguest:string="Alina";
let middleindex=Guest.length/2;
Guest.splice(middleindex,0,middleguest);
Guest.push("eman");
Guest.map((item)=>console.log(`\nDear ${item} you are invited for dinner!`));





