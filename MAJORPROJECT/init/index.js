//This index.js file is for initializing database in localhost

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";  //localhost url


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data= initData.data.map((obj) => ({
    ...obj,
    owner: "68366b977ab2d35fde55c634" 
  }));
    

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();








//This index.js file is for initializing the databasein mogodb atlas

// // Load environment variables FIRST - this is critical
// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// // Enhanced environment verification
// console.log("Environment Variables Loading Status:");
// console.log("Current Directory:", __dirname);
// console.log("NODE_ENV:", process.env.NODE_ENV || "development");

// // Debug all MongoDB-related environment variables
// console.log("\nMongoDB Environment Variables:");
// console.log("ATLASDB_URL:", process.env.ATLASDB_URL ? "***exists***" : "UNDEFINED!");
// console.log("DB_NAME:", process.env.DB_NAME || "Not specified");
// console.log("DB_USER:", process.env.DB_USER ? "***exists***" : "Not specified");

// // Validate environment configuration
// if (!process.env.ATLASDB_URL) {
//   console.error("\n❌ FATAL ERROR: Missing MongoDB configuration");
//   console.error("Please ensure your .env file contains ATLASDB_URL");
//   console.error("Example format:");
//   console.error("ATLASDB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority");
//   process.exit(1);
// }

// // Database connection with comprehensive options
// async function connectToDatabase() {
//   try {
//     console.log("\nAttempting to connect to MongoDB Atlas...");
    
//     await mongoose.connect(process.env.ATLASDB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 10000,  // Increased timeout
//       socketTimeoutMS: 45000,
//       retryWrites: true,
//       retryReads: true,
//       w: "majority"
//     });
    
//     console.log("✅ Successfully connected to MongoDB Atlas");
//     console.log("Database Name:", mongoose.connection.name);
//     console.log("Host:", mongoose.connection.host);
//     return true;
//   } catch (err) {
//     console.error("\n❌ MongoDB Connection Failed:");
//     console.error("Error:", err.message);
//     console.error("\nConnection Attempt Details:");
//     console.error("Connection String:", process.env.ATLASDB_URL);
//     console.error("\nTroubleshooting Tips:");
//     console.error("1. Verify your Atlas cluster is running");
//     console.error("2. Check your IP is whitelisted in Atlas");
//     console.error("3. Verify your database user credentials");
//     console.error("4. Ensure network connectivity");
//     return false;
//   }
// }

// // Data initialization with validation
// async function initializeDatabase() {
//   try {
//     console.log("\nInitializing database...");
    
//     // Validate data before insertion
//     if (!initData.data || !Array.isArray(initData.data)) {
//       throw new Error("Invalid data format - expected an array");
//     }

//     const deleteResult = await Listing.deleteMany({});
//     console.log(`♻️ Cleared ${deleteResult.deletedCount} existing listings`);

//     const modifiedData = initData.data.map((obj, index) => {
//       if (!obj.title || !obj.price) {
//         console.warn(`⚠️ Item at index ${index} missing required fields`);
//       }
//       return { 
//         ...obj,
//         owner: "68366b977ab2d35fde55c634",
//         createdAt: new Date(),
//         updatedAt: new Date()
//       };
//     });

//     const insertResult = await Listing.insertMany(modifiedData);
//     console.log(`✅ Successfully inserted ${insertResult.length} listings`);
    
//     return true;
//   } catch (err) {
//     console.error("\n❌ Database Initialization Failed:");
//     console.error(err);
//     return false;
//   }
// }

// // Main execution with proper cleanup
// (async () => {
//   try {
//     console.log("\nStarting database initialization process...");
    
//     const isConnected = await connectToDatabase();
//     if (!isConnected) process.exit(1);

//     const isInitialized = await initializeDatabase();
//     if (!isInitialized) process.exit(1);

//     console.log("\n✨ Database initialization completed successfully ✨");
//   } catch (err) {
//     console.error("\n💀 Unexpected error in main process:");
//     console.error(err);
//   } finally {
//     if (mongoose.connection.readyState === 1) {
//       await mongoose.connection.close();
//       console.log("\n🔌 MongoDB connection closed");
//     }
//     process.exit(0);
//   }
// })();