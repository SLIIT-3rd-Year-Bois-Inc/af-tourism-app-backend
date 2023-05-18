import mongoose, { Schema, Types } from "mongoose";

const reserveSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    default: true,
  },
  specialRequests: {
    type: String,
  },
});

const Reserve = mongoose.model("Reserve", reserveSchema);

export default Reserve;
