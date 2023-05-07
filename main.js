import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose, { Types } from "mongoose";
import ShopItem from "./models/shopItem.js";

import { roomsRouter } from "./controllers/room.js";
import { shopItemsRouter } from "./controllers/shopItem.js";
import Food from "./models/food.js";
import Tour from "./models/tours.js";
import { foodRouter } from "./controllers/food.js";
import { tourRouter } from "./controllers/tour.js";

async function main() {
  // Load .env file
  dotenv.config();

  const PORT = process.env.PORT ?? 5000;
  const MONGO_URI = process.env.MONGO_URI;

  // Connect to database
  console.log("😊 Connecting to MongoDB...");
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const app = Express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api/rooms", roomsRouter);
  app.use("/api/shop-items", shopItemsRouter);
  app.use("/api/food", foodRouter);
  app.use("/api/tours", tourRouter);

  // Start Listening
  app.listen(PORT, () => {
    console.log(`🚀 Listening on ${PORT}`);
  });
}

main();
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
