const mongoose=require("mongoose");

main()
.then(() => {
    console.log("Connection successfull")
})
.catch((err) => {
    console.log(err)
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    name:{
        type: String,   
        required: true
    } ,
    author:{
        type: String,
        
    },
    price:{
        type: Number,
        
    },
    rating:{
        type: Number,
        
    },
});

const Book = mongoose.model('Book', bookSchema);

let book1 = new Book({
    name: "The Alchemist",
    author: "Paulo Coelho",
    price: 200
});
book1.save()
.then((res) => {
    console.log("Book saved successfully",res)
})
.catch((err) => {
    console.log(err)
})