const express= require('express');
const app= express();

let port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
app.use((req,res)=>{
    console.log("request received");
    res.send("Hello World!");
    console.log("response sent");
});

//using path parameters
app.get('/:username/:id',(req,res)=>{
    res.send(`username: ${req.params.username} and id: ${req.params.id}`);
});

//Query Strings
app.get('/Search',(req,res)=>{
let q=req.query;
if(!q.q){
    res.send("Please provide a search query");
}
res.send(`Search query: ${q.q}`);
});