import mongoose, { Schema, Types } from "mongoose";

const foodSchema = new Schema({
  provider: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  desc: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
