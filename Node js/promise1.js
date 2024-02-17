let p = (n)=>{
    return new Promise((resolve,reject)=>{
        let a =n;
        if(n%2==0){
            console.log("Given number is even");
            resolve(a);
        }else{
            console.log("Given number is odd");
            reject(a);
        }
    });
}

p(10).then((value)=>{
    console.log(value) 
}).catch(()=>{
    console.log(value)
});