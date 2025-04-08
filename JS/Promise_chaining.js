//Promise Chaining
function saveToDb(data){
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
    saveToDb("Aman")
    .then((result)=>{
        console.log("Promise1 resolved successfully!");
        return saveToDb("Aman2");
        
    })
    .then((result)=>{
        console.log("Promise2 resolved successfully!");
        return saveToDb("Aman3");
    })
    .then((result)=>{
        console.log("Promise3 resolved successfully!");
    })
    .catch((error)=>{
        console.log("Promise rejected with error!");
    });