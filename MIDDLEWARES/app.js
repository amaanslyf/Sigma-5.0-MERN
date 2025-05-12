const express= require("express");
const app= express();

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});   


// app.use((req, res, next)=>{
//     console.log("Middleware is running");
//     next();
// });

// app.use((req, res, next)=>{
//     console.log("Middleware 2 is running");
//     next();
// });

// app.get("/",(req, res)=>{
//     res.send("Hello from the home page");
// });
// app.get("/random",(req, res)=>{
//     res.send("Hello from the random page");
// });

// //Middleware function
// app.use("/api", (req, res, next)=>{
//     let {token}= req.query;
//     if(token==="12345"){
//         next();
//     }
//     res.send("Unauthorized");
// });

// //route
// app.get("/api", (req, res)=>{
//     res.send("Hello from the api page");
// });

//alternate way

const checktoken=(req, res, next)=>{
    let {token}= req.query;
    if(token==="12345"){
        next();
    }
    res.send("Unauthorized");
};
app.use("/api", checktoken, (req, res)=>{
    res.send("Hello from the api page");
});