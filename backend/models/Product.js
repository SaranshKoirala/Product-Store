import mongoose from "mongoose";

//Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

//product model
const Product = mongoose.model("Product", productSchema);

export default Product;
