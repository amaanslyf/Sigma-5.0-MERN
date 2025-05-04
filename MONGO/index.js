const mongoose=require("mongoose");

main()
.then(() => {
    console.log("Connection successfull")
})
.catch((err) => {
    console.log(err)
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);


// const user1= new User({
//     name: "adam",
//     email: "adam@yahoo.in",
//     age: "48" 
// });

// const user2= new User({
//     name: "eve",
//     email: "eve@gmail.com",
//     age: "48"
// });

// user1.save()
// .then(() => {
//     console.log("User1 saved successfully")
// })
// .catch((err) => {
//     console.log(err)
// });
// user2.save()
// .then(() => {
//     console.log("User2 saved successfully")
// })
// .catch((err) => {
//     console.log(err)
// });

// User.insertMany([
//     { name: "tony", email: "tony@gmail.com", age: 50 },
//     { name: "steve", email: "steve@gmail.com", age: 50 },
//     { name: "bruce", email: "bruce@gmail.com", age: 50 }
// ]).then((res)=> {
//     console.log("Data inserted successfully", res)
// }); 

// User.find({})  
// .then((res) => {
//     console.log("Data fetched successfully", res)
// })
// .catch((err) => {
//     console.log(err)
// });

// User.findById("64b0f3c1a2d4e5f8c8b45678")
// .then((res) => {
//     console.log("Data fetched successfully", res)
// })
// .catch((err) => {
//     console.log(err)
// });

// User.findOne({name: "adam"})
// .then((res) => {
//     console.log("Data fetched successfully", res)
// })
// .catch((err) => {
//     console.log(err)
// })


// User.updateOne({name: "bruce"}, {age: 55})
// .then((res) => {
//     console.log("Data updated successfully", res)
// })
// .catch((err) => {
//     console.log(err)
// });

// User.updateMany({age:{$gt:48}}, {age: 50})
// .then((res)=>{
//     console.log("Data updated successfully", res)

// })
// .catch((err)=>{
//     console.log(err)
// });


// User.findOneAndUpdate({name: "tony"}, {age: 95},{new: true})
// .then((res) => {
//     console.log("Data updated successfully", res)
// })
// .catch((err) => {
//     console.log(err)
// })


// User.deleteOne({name: "tony"})
// .then((res) => {
//     console.log("Data deleted successfully", res)
// })

// User.deleteMany({age: 50})
// .then((res) => {
//     console.log("Data deleted successfully", res)
// })
// .catch((err) => {
//     console.log(err)
// });

// User.findByIdAndDelete('68158e391abf4a07c18a4843')
// .then((res) => {
//     console.log("Data deleted successfully", res)
// })

User.findOneAndDelete({name: "eve"})
.then((res) => {
    console.log("Data deleted successfully", res)
})