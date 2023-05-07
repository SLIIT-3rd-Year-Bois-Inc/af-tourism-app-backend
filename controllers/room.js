import { Router } from "express";
import Room from "../models/rooms.js";

const router = Router();

// Get rooms
router.get("/", async (req, res) => {
  try {
    // TODO - filters
    const rooms = await Room.find({}).exec();
    res.status(200).json(rooms);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Create rooms
router.post("/", async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Update room
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const room = await Room.findByIdAndUpdate(id, req.body).exec();

    if(!room) {
      throw Error("Update failed for id " + id);
    }

    res.status(200).json(room);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Delete room
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const room = await Room.findByIdAndRemove(id).exec();

    if(!room) {
      throw Error("Delete failed for id " + id);
    }

    res.status(200).json(room);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export { router as roomsRouter };
