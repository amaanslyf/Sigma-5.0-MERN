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
    .then(()=>{
        console.log("Promise1 resolved successfully!");
        return saveToDb("Aman2");
        
    })
    .then(()=>{
        console.log("Promise2 resolved successfully!");
        return saveToDb("Aman3");
    })
    .then(()=>{
        console.log("Promise3 resolved successfully!");
    })
    .catch(()=>{
        console.log("Promise rejected with error!");
    });