const mongoose= require('mongoose');
const {Schema}= mongoose;

main()
.then(() => {
    console.log("Connection successfull")
})
.catch((err) => {
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/relationDemo');
}

const userSchema= new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            // _id: false, // This will prevent the creation of an _id field for each address
            location: String,
            city: String,
        }
    ]
});
const User= mongoose.model('User', userSchema);

const addUsers= async () => {
    let user1= new User({
        username: "John",
        addresses: [
            {
            
                location: "123 Main St",
                city: "New York"
            }
        ]
    });

    user1.addresses.push({
        location: "456 Elm St",
        city: "Los Angeles"
    });

    await user1.save();
    console.log("User added successfully");
};
addUsers();
