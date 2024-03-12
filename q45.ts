type car={
    manufacture:string
    model:string
    [key:string]:any;
}
function creatcar(manufacture:string,model:string,optional:Record<string,any>):car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar :car=creatcar("toyota","carolla",{colour:"silver",year:2024})
console.log(mycar);