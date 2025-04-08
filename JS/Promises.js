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
    .then((result)=>{
        console.log("Promise resolved successfully!");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Promise rejected with error!");
        console.log(error);
    });