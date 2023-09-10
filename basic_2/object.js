let mysum=Symbol("Key");

let ob={
    name:"Pratik",
    age:21,
    Hobby:["Anime watch","Gaming","programming"],
    Gf:false,
    [mysum]:"MyKey"

}
// console.log(ob)
// console.log(ob.Gf)
// console.log(typeof ob.mysum)
// console.log(ob[mysum])
ob.age=20;
// console.log(ob)
// Object.freeze(ob);
// ob.Hobby.concat="hentai watch"
// ob.name="Somnath"
// console.log(ob)
let ob2={1:"s",2:"o"}
// let newob=Object.assign({},ob,ob2);
let newob={...ob,...ob2}
console.log(newob);
