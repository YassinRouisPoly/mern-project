const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Le nom est obligatoire'],
        trim: true
    },
    brand: {
        type: String,
        required: [true, "La marque est obligatoire"],
    },
    numPlaces: {
        type: Number,
        default: 4+1
    },
    is4x4: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Car", carSchema);