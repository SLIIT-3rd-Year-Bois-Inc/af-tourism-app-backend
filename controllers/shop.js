import { Router } from "express";
import Shop from "../models/shop";
import ShopItem from "../models/shopItem";
import mongoose from "mongoose";

const router = Router();

// Get shops
router.get("/", async (req, res) => {
  try {
    // TODO - filters
    const shops = await Shop.find({}).exec();
    res.status(200).json(shops);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Get items per shop
router.get("/:id/items", async (req, res) => {
  try {
    // TODO - filters
    const id = req.params.id;
    const shops = await ShopItem.find({ providerId: mongoose.Types.ObjectId(id)}).exec();
    res.status(200).json(shops);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Create shops
router.post("/", async (req, res) => {
  try {
    const shops = new Shop(req.body);
    await shops.save();
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Update shops
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const shops = await Shop.findByIdAndUpdate(id, req.body).exec();

    if(!shops) {
      throw Error("Update failed for id " + id);
    }

    res.status(200).json(shops);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Delete shops
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const shops = await Shop.findByIdAndRemove(id).exec();

    if(!shops) {
      throw Error("Delete failed for id " + id);
    }

    res.status(200).json(shops);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export { router as shopsRouter };
