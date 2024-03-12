interface item{
    name:string
    price:number
};
// create two objects
const book:item= {
    name:"IF HE HAD BEEN WITH ME",
    price:300
};
const Grapes:item={
    name:"Grapes"
    price:400
};
console.log(`Book name: ${book.name}, price ${book.price}`);
console.log(`Grapes: ${Grapes.name}, price ${Grapes.price}`);