const express= require('express');
const app= express();

let port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


// app.get('/home',(req,res)=>{
//     res.send("Root path");
// });
app.get('/about',(req,res)=>{
    res.send("About page")
}
);
app.get('/contact',(req,res)=>{
    res.send("Contact page")
});
// app.get('*',(req,res)=>{
//     res.send("page not found")
// });