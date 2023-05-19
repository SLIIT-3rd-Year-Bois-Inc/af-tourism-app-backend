import mongoose, { Schema, Types } from "mongoose";

const shopItemSchema = new Schema({
    providerId: {
        type: Types.ObjectId,
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
});

const ShopItem = mongoose.model("ShopItem", shopItemSchema);

export default ShopItem;