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