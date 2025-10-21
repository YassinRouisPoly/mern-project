const l = require("../logger");

let lastId = 2;
const users = {
    1: {
        name: "Johnny",
        email: "johnny@gmail.com",
    },
    2: {
        name: "Martina",
        email: "martina@gmail.com",
    }
}


const getAllUsers = (req, res) => {
    res.status(201).json(users)
}

const getUser = (req, res) => {
    const id = req.params.id;
    if (Object.hasOwn(users, id)) {
        res.status(200).json({...users[id], success: true})
    } else {
        res.status(404).json({errorMessage: "ID not found", success: false})
    }
}

const createUser = (req, res) => {
    const {
        name, email
    } = req.body;
    if (!name || !email) {
        res.status(400).json({errorMessage: "Missing required field (name, email)", success: false})
    } else {
        users[++lastId] = {
            name,
            email
        }
        res.status(200).json({...users, success: true})
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUser
}