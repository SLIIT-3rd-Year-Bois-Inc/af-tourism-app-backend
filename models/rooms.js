import mongoose, { Schema, Types } from "mongoose";

const roomsSchema = new Schema({
    provider: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    availableDates: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    desc: {
        type: String
    },
    guests: {
        type: Number
    },
    rating: {
        type: Number,
        default: 0
    }
});

const Room = mongoose.model("Room", roomsSchema);

export default Room;