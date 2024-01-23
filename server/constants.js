import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

export const port = process.env.PORT || 8900;
export const mongoUrl = process.env.MONGO_URL;
export const dbName = process.env.DB_NAME;
