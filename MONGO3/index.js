const express=require("express");
const app=express();   
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js"); 
const methodOverride=require("method-override");



app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));


main()
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
}





app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});   


app.get('/',(req,res)=>{
    res.send("Hello World");
});


//all chats display route
app.get('/chats',async (req,res)=>{
    let chats= await Chat.find();
    
    res.render("index.ejs",{chats});  
});  


//new chat route
app.get('/chats/new',(req,res)=>{
    res.render("new.ejs");  
});


app.post('/chats',(req,res)=>{
    let {from , to ,msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save()
    .then((res)=>{
        console.log("Chat saved successfully");
    })
    .catch((err)=>{
        console.log(err);
    });

    res.redirect("/chats");
});

//edit chat route
app.get('/chats/:id/edit',async (req,res)=>{
    let id=req.params.id;
    let chat= await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

app.put('/chats/:id',async (req,res)=>{
    let id=req.params.id;
    let {msg:newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,
        {
            msg:newMsg,
            created_at:new Date()
        },
        {runValidators:true , new:true}
         
    );
        console.log(updatedChat);
    res.redirect("/chats");  
    });

    //delete chat route
    app.delete('/chats/:id',async (req,res)=>{
        let id=req.params.id;
        await Chat.findByIdAndDelete(id);
        res.redirect("/chats");  
    });