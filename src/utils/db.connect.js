const mongoose = require("mongoose");

// ===============================
//  MongoDB Connection Function
// ===============================
const dbConnect = async () => {
  try {
    // Check if MONGO_URI exists
    const dbUrl = process.env.MONGO_URI;
    if (!dbUrl) {
      throw new Error("MONGO_URI is missing in environment variables!");
    }

    console.log("🔄 Connecting to MongoDB...");

    const connection = await mongoose.connect(dbUrl);

    console.log("✅ MongoDB Connected Successfully!");
    console.log(`📌 Host: ${connection.connection.host}`);
    console.log(`📌 DB Name: ${connection.connection.name}`);
    
  } catch (error) {
    console.error("❌ Error while DB Connection:");
    console.error(`🔍 Message: ${error.message}`);
  }
};

// Export the function
module.exports = dbConnect;
