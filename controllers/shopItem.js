import { Router } from "express";
import ShopItemService from "../services/ShopItemService.js";

const router = Router();

// Get all shopItems
router.get("/", ShopItemService.getShopItems);

// Create shopItem
router.post("/", ShopItemService.createShopItem);

// Update shopItem
router.patch("/:id", ShopItemService.updateShopItem);

// Delete shopItem
router.delete("/:id", ShopItemService.deleteShopItem);

export { router as shopItemsRouter };
