const PromiseOne=new Promise((resolve,reject)=>{
    setTimeout(function(){
       console.log('Async task is completed one');
        resolve();
    },1000)
})

// PromiseOne.then(function(){
//     console.log("promis consumed");
// })

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Async task is completed two")
        resolve();
    }, 1000);
}).then()

new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({
            username:"Pratik Guha",
            email:"som@email.com"
        })
    }, 1000);
}).then((user)=>{
    console.log(`the username is ${user.username} and his email is ${user.email}`);
})

addVal=((n1,n2)=>{
    return n1+n2;
})

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const t=addVal(1,5);
//         error=true; 
//         if(t>5){
//             resolve({
//                 username:"Pratik Guha",
//                 age:21
//             })
//         }
//         else{
//             reject("There is some error occurs");
//         }
//     }, 1000);
// }).then((user)=>{

//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Finally everything occurs though it was resolve or rejected")
// })
const promise5=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // const t=addVal(1,5);
        error=true; 
        if(!error){
            resolve({
                username:"Som Guha",
                age:21
            })
        }
        else{
            reject("There is some error occurs");
        }
    }, 1000);
})

async function consume(){
    try{
        const response=await promise5;
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consume()


