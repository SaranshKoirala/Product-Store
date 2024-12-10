import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";
import router from "./Routes/ProductRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT);

// allows us to accept JSON data in the req.body
app.use(cors());
app.use(express.json());

app.use("/api/products", router);
app.use("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
