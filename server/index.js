import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import UserRouter from "./routes/Users.js";
import ProductRouter from "./routes/Products.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true}));

// error handel
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Welcome to the server!",
  });
});

app.use("/api/user", UserRouter);
app.use("/api/products", ProductRouter);

const ConnectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_DB, {
      ssl: true,
      tlsAllowInvalidCertificates: true, // dev ke liye, production me hata dena
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};

// start server

const StartServer = async () => { 
    try {
            ConnectDB();
            app.listen(8080, () => {
            console.log("Server is running on port 8080");
        });
    } catch (error) {
        console.log("Error", error.message);
    }
};

StartServer();