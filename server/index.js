import express from "express";
import dotenv from "dotenv";
import { port } from "./constants.js";
import { connectDB } from "./db/index.js";

dotenv.config({ path: "./.env" });

const app = express();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  connectDB();
});
