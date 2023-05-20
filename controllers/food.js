import { Router } from "express";
import Food from "../models/food.js";
import { FoodService } from "../services/food.js";

const router = Router();

// Get foods
router.get("/", FoodService.getFood);

// Get foods
router.get("/:id", FoodService.getOneFood)

// Create foods
router.post("/", FoodService.createFood);

// Update food
router.patch("/:id", FoodService.updateFood);

// Delete food
router.delete("/:id", FoodService.deleteFood);

export { router as foodRouter };
