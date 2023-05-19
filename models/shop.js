import mongoose, { Schema, Types } from "mongoose";

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    required: true,
    dropDups: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  displayImage: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
