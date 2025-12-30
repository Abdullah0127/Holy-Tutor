import mongoose from 'mongoose';


const connectToMongo = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully");
   
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connectToMongo;
