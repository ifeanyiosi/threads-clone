import mongoose from "mongoose";

let isConnected = false; //used to check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB URL NOT FOUND");

  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;

    console.log("Yureka! Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
