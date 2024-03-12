let car:string="Subaru";
let age :number=25
let numbers:number[]=[2, 3, 6, 7]

//***String Tests***

//Test 01:equality camparison
console.log("Is car == 'subaru'? I pridict true.");
console.log(car == 'subaru');//True
//Test 02:strict equality comparison
console.log("Is car === 'subaro'? I pridict true.");
console.log(car === 'subaru');//True
//Test 03: unequality comparison
console.log("Is car != 'Toyota'? I pridict true.");
console.log(car != 'Toyota');//True
//test 04:strict unequality comparison
console.log("Is car !== 'subaro'? I pridict false.");
console.log(car !== 'subaru');//false

//*** lower case function tests ***

//Test 05:lower case conversion (true)
console.log("Is car.tolowercase()== 'subaru'? I pridict true");
console.log(car.toLowerCase() == 'subaru');//true
//Test 06:Lower case conversion(false) 
console.log("Is car === car.tolowercase()? I pridict false")
console.log(car === car.toLowerCase());//false

// *** Numericals Tests ***

//Test 07:equality camparison
console.log("Is age == 25 ? I pridict true.");
console.log(age == 25 );//True
//Test 08: unequality comparison
console.log("Is age != 30 ? I pridict true.");
console.log(age != 30 );//True
//Test 09:less than comparison
console.log("Is age < 30 ? I pridict true.");
console.log(age < 30 );// (true)lexicographic comparison
//Test 10:greater than comparison
console.log("Is age > 30 ? I pridict false.")
console.log(age > 30 );//(false)lexicographic comparison
//Test 11:less than or equal to comparison
console.log("Is age <= true ? I pridict true.")
console.log(age <= 25 );//True
//Test 12:greater than or equal to comparison
console.log("Is age >= 27'? I pridict false.")
console.log(age >= 27 );//false

//*** Logical operators ***

//Test 13:And operator
console.log("Is age is > 15 && < 30? I pridict true." );
console.log(age > 15 && age < 30 );//true
//Test 14: or operator
console.log("Is age 30 > || < 15 ? I pridict false ");
console.log(age > 30 || age < 15 );//false

//*** array tests ***

//IN array
console.log("Is 3 in numbers? I pridict true");
console.log(3 in numbers);//true
//not in array 
console.log("Is 9 in numbers? I pridict false.");
console.log(9 in numbers);


