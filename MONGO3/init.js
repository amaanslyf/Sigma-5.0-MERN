const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
}

let allChats=[
    {
    from:"John",
    to:"Doe",
    msg:"Hello Doe",
    created_at:new Date()
},
{
    from:"adam",
    to:"eve",
    msg:"Hello eve",
    created_at:new Date()
},
{
    from:"John",
    to:"Doe",
    msg:"Hello Doe",
    created_at:new Date()
},
{
    from:"adam",
    to:"John",
    msg:"Hello John",
    created_at:new Date()
}

]
Chat.insertMany(allChats);



