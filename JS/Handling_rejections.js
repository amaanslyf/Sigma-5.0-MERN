function getnum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 10) {
                console.log("Error: Number is greater than 10");
                // Reject the promise if the number is greater than 10
                reject();
            } else {
                console.log(num);
                resolve();
            }
        }, 1000);
    });
}

async function getnum2() {
    try{
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    }catch (error) {
        console.log("An error occurred:", error);
    }
    // Handle the error here if needed
}

getnum2();