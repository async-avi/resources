import mongoose from "mongoose";
import dotenv from "dotenv";
import { mongoUrl } from "../constants.js";
import { dbName } from "../constants.js";

export const connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(`${mongoUrl}/${dbName}`);
    console.log(
      `Connected to ${connectionInstance.connection.db.databaseName}`
    );
  } catch (error) {
    console.log(`Error connecting to DB, error: ${error}`);
  }
};
