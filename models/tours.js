import mongoose, { Schema, Types } from "mongoose";

const tourSchema = new Schema({
    provider: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    notice: {
        type: String,
    },
    features: {
        duration: {
            type: String,
            required: true
        },
        meetingPoint: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        },
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    availability: {
        type: String
    },
    image: {
        type: String
    }
});

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;