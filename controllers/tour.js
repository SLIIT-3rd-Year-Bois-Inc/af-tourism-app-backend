import { Router } from "express";
import Tour from "../models/tours.js";

const router = Router();

// Get tours
router.get("/", async (req, res) => {
  try {
    // TODO - filters
    const tours = await Tour.find({}).exec();
    res.status(200).json(tours);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Create tours
router.post("/", async (req, res) => {
  try {
    const tour = new Tour(req.body);
    await tour.save();
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Update tour
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findByIdAndUpdate(id, req.body).exec();

    if(!tour) {
      throw Error("Update failed for id " + id);
    }

    res.status(200).json(tour);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Delete tour
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findByIdAndRemove(id).exec();

    if(!tour) {
      throw Error("Delete failed for id " + id);
    }

    res.status(200).json(tour);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export { router as tourRouter };
