const l = require("../logger.js").default;
const Car = require("../models/cars");

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (err) {
        l.error(err);
        res.status(500).json({errorMessage: "Erreur lors de la récupération des voitures.", success: false});
    }
}

const getCarByID = async (req, res) => {
    try {
        const cars = await Car.findById(req.params.id);
        if (!cars) {
            return res.status(404).json({
                errorMessage: "Voiture non trouvée",
                success: false
            })
        }
        return res.status(200).json(cars);
    } catch (err) {
        l.error(err);
        res.status(500).json({errorMessage: "Erreur lors de la récupération des voitures.", success: false});
    }
}

const createCar = async (req, res) => {
    try {
        const {name, brand, is4x4, numPlaces} = req.body;
        const carData = {name, brand, is4x4, numPlaces};
        const newCar = new Car(carData);

        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (err) {
        res.status(400).json({
            errorMessage: "Erreur lors de la création de la voiture",
            success: false
        })
    }
}

module.exports = {
    createCar,
    getAllCars,
    getCarByID
}