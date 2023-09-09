let array=[1,2,3,4,5,6]

// array.unshift(5)
// array.shift(5)
// console.log(array)
// console.log(array.includes(7))

let array2=array.join();
// console.log(array2);
// console.log(typeof(array2));

let b=[7,8,9,10];
let c=[11,12,13,15,16,17]
// let newarry=array.concat(b);
let newarry=[...array,...c,...b]
// console.log(newarry);

// console.log(Array.isArray(array))
console.log(Array.from("Pratik"))
let s1=12;
let s2=11;
let s3=13;
console.log(Array.of(s1,s2,s3))
