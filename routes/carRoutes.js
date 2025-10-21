const express = require('express');
const router = express.Router();

const { createCar, getAllCars, getCarByID } = require('../controllers/carController');


router.post("/", createCar);
router.get("/", getAllCars);
router.get("/:id", getCarByID);


module.exports = router;