import express from "express";
import { Router } from "express";
import Product from "../models/Product.js";

const router = express.Router();

//creating new product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error while creating product:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

//reading all the product
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    data: products,
  });
});

// updating the product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ success: false, message: "No product found" });
    }
    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// deleting the product
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;
