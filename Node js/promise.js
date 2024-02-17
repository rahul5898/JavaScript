let p = ()=>{
 return   new Promise((resolve,reject)=>{
        resolve();
    })
}

p().then(()=>{
    console.log("then")
}).catch(()=>{
    console.log("catch")
});