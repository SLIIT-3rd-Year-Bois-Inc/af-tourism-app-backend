import { Router } from "express";
import ShopItem from "../models/shopItem.js";

const router = Router();

// Get all shopItems
router.get("/", async (req, res) => {
  try {
    // TODO - filters
    const shopItems = await ShopItem.aggregate([
      {
        $lookup: {
          from: "shops",
          localField: "providerId",
          foreignField: "_id",
          as: "providerDetails",
        },
      },
      {
        $unwind: {
          path: "$providerDetails",
        },
      },
    ]).exec();

    res.status(200).json(shopItems);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Create shopItem
router.post("/", async (req, res) => {
  try {
    const shopItems = new ShopItem(req.body);
    await shopItems.save();
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Update shopItem
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const shopItems = await ShopItem.findByIdAndUpdate(id, req.body).exec();

    if (!shopItems) {
      throw Error("Update failed for id " + id);
    }

    res.status(200).json(shopItems);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

// Delete shopItem
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const shopItems = await ShopItem.findByIdAndRemove(id).exec();

    if (!shopItems) {
      throw Error("Delete failed for id " + id);
    }

    res.status(200).json(shopItems);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export { router as shopItemsRouter };
