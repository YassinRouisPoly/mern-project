const express = require('express');
const router = express.Router();

const { createUser, getUser, getAllUsers } = require('../controllers/userController');


router.get("/:id", getUser);
router.get("/", getAllUsers);
router.post("/", createUser);


module.exports = router;