const l = require("../logger.js").default;
const User = require("../models/user");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        l.error(err);
        res.status(500).json({errorMessage: "Erreur lors de la récupération des utilisateurs.", success: false});
    }
}

const createUser = async (req, res) => {
    try {
        const {email, username, password, hashedPassword} = req.body;
        const userData = {
            email,
            username,
            hashedPassword: hashedPassword ? hashedPassword : bcrypt.hashSync(password, 10)
        };
        const newUser = new User(userData);

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({
            errorMessage: "Erreur lors de la création de l'utilisateur",
            success: false
        })
    }
}

module.exports = {
    createUser, getAllUsers
}