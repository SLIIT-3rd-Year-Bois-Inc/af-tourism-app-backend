import { Router } from "express";
import ShopService from "../services/ShopService.js";
import ShopItem from "../models/shopItem.js";
import mongoose from "mongoose";

const router = Router();

// Get shops
router.get("/", ShopService.getShops);

// Get items per shop
router.get("/:id/items", async (req, res) => {
  try {
    // TODO - filters
    const id = req.params.id;
    const shopItems = await ShopService.getShopItemsByProviderId(id);
    res.status(200).json(shopItems);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Create shop
router.post("/", ShopService.createShop);

// Update shop
router.patch("/:id", ShopService.updateShop);

// Delete shop
router.delete("/:id", ShopService.deleteShop);

export { router as shopsRouter };
