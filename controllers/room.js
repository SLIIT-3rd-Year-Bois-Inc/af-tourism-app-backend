import { Router } from "express";
import RoomService from "../services/RoomService.js";
import Reserve from "../models/reserve.js";
import mongoose from "mongoose";

const router = Router();

// Get rooms
router.get("/", RoomService.getRooms);

// Get room by ID
router.get("/:id", RoomService.getOneRoom);

// Reserve room
router.post("/:id/reserve", async (req, res) => {
  try {
    const id = req.params.id;
    const r = req.body;
    r.roomId = new mongoose.ObjectId(id);

    const reserve = new Reserve(r);
    await reserve.save();
    res.status(200).json(reserve);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Create room
router.post("/", RoomService.createRoom);

// Update room
router.patch("/:id", RoomService.updateRoom);

// Delete room
router.delete("/:id", RoomService.deleteRoom);

export { router as roomsRouter };
