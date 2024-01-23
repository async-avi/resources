import express from "express";
import dotenv from "dotenv";
import { port } from "./constants.js";
import { connectDB } from "./db/index.js";
import resourceRouter from "./routes/resource.route.js";

dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());

app.use("/resource", resourceRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  connectDB();
});
