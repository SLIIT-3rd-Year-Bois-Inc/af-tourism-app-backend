import { Router } from "express";
import Food from "../models/food.js";

const router = Router();

// Get foods
router.get("/", async (req, res) => {
  try {
    // TODO - filters
    const foods = await Food.find({}).exec();
    res.status(200).json(foods);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Get foods
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const foods = await Food.findById(id).exec();
    res.status(200).json(foods);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Create foods
router.post("/", async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Update food
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const food = await Food.findByIdAndUpdate(id, req.body).exec();

    if(!food) {
      throw Error("Update failed for id " + id);
    }

    res.status(200).json(food);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Delete food
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const food = await Food.findByIdAndRemove(id).exec();

    if(!food) {
      throw Error("Delete failed for id " + id);
    }

    res.status(200).json(food);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export { router as foodRouter };
