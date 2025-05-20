const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Listing=require('./models/listing');
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsMate);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'/public')));

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);

}

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});

app.get('/',(req,res)=>{
    res.send("Hello i m root");
});


//index route
app.get('/listings',async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

//new route
app.get('/listings/new',(req,res)=>{
    res.render("listings/new.ejs");
});

//show route
app.get('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//create route
app.post('/listings',async(req,res,next)=>{
    try{
        const {title,description,image,price,location,country}=req.body;
    const newListing=new Listing({
        title,
        description,
        image,
        price,
        location,
        country
    });
    await newListing.save()
    res.redirect('/listings');
    }
    catch(err){
        next(err);
    }
});

//edit route
app.get('/listings/:id/edit',async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});
        
//update route
app.put('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    const {title,description,image,price,location,country}=req.body;
    const listing=await Listing.findByIdAndUpdate(id,{
        title,
        description,
        image,
        price,
        location,
        country
    });
    res.redirect(`/listings/${id}`);
});

//delete route
app.delete('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
});

//error handling middleware
app.use((err,req,res,next)=>{
    res.send("Something went wrong");
});