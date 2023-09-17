async function getUserInfo(){
    try {
        
        const response= await fetch('https://api.github.com/users/PratikGuha');
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log('E: ',error)
    }
}

// getUserInfo();

fetch('https://api.github.com/users/PratikGuha').then((userInfo)=>{
    return userInfo.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})