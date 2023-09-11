function add(num) {
    return num+1;
}

const addtow=function(num){
    return num+1;
}

const course={
    name:"Pratik",
    price:1000,
    welcomemassege:function() {
        console.log(` ${this.name} , Welcome to my Website`);
        console.log(this);
    }
}

// course.welcomemassege();
course.name="Somanth";
// course.welcomemassege();

// const addNumber=(n1,n2)=>{
//     return n1+n2;
// }
// const addNumber=(n1,n2)=> n1+n2;
const addNumber=(n1,n2)=> (n1+n2);
// if you use {} this then you must return something but if you use () then you don't need any return for arror function
const object=()=>({username:"Pratik Guha"});
// for return some ovbject you must rap it with ( ) and for object it should be as useual {}
// console.log(addNumber(2,3))
console.log(object())