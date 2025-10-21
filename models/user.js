const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'L\'username est obligatoire'],
        trim: true
    },
    email: {
        type: String,
        required: [true, "L'email est obligatoire"],
    },
    hashedPassword: {
        type: String,
        required: [true, "Le hash du mot de passe est obligatoire"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);