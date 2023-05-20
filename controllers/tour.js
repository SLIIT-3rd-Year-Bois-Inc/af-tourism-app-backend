import { Router } from "express";
import TourService from "../services/TourService.js";

const router = Router();

// Get tours
router.get("/", TourService.getTours);

// Create tour
router.post("/", TourService.createTour);

// Update tour
router.patch("/:id", TourService.updateTour);

// Delete tour
router.delete("/:id", TourService.deleteTour);

export { router as tourRouter };
