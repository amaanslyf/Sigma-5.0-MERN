// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log("data1", data.fact);
//         return fetch(url);
//     })
//     .then((res) => res.json()) //this res.json() returns a promise, which converts the response to JSON
//     // and returns a promise that resolves to the result of parsing the body text as JSON.
//     .then((data) => {
//         console.log("data2", data.fact);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });
// This code fetches a random cat fact from the API at "https://catfact.ninja/fact" and logs it to the console. It makes two requests to the same URL, logging the fact from each response. If an error occurs during the fetch process, it logs the error message to the console.
// The first fetch request retrieves a random cat fact, and the second fetch request retrieves another random cat fact. The data is parsed as JSON and the "fact" property is logged to the console. If an error occurs during the fetch process, it logs the error message to the console.



//using fetch with async await

let url = "https://catfact.ninja/fact";

async function getCatFact() {
    try {
        let res = await fetch(url);
        let data = await res.json(); //this res.json() returns a promise, which converts the response to JSON
        console.log("data", data.fact);
        
        let res2 = await fetch(url);
        let data2= await res.json();
        console.log("data2", data2.fact);
    }
    catch (error) {
        console.log("Error:", error);
    }
}