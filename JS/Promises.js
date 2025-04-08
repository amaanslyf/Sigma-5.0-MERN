function saveToDB(data){
    return new Promise((resolve, reject) => {
        let internetspeed = Math.floor(Math.random() * 10)+1;
        if(internetspeed > 4){
            resolve("Data saved to DB successfully!");
        }
        else{
            reject("Data could not be saved to DB!");
        }
    });
}

saveToDB("Aman" )
    .then(()=>{
        console.log("Promise resolved successfully!");
    })
    .catch(()=>{
        console.log("Promise rejected with error!");
    });