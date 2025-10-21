const mongoose = require('mongoose');
const Logger = require("../logger.js").default;

const connectDB = async () => {
    try {
        if(!process.env.MONGODB_URI) {
            Logger.fatal("La variable d'environnement MONGODB_URL n'a pas été configurée");
            Logger.error("Dans ce cas :");
            Logger.error("    - Vérifiez que le fichier .env contient bien la variable MONGODB_URL");
            Logger.error("    - Définissez manuellement MONGODB_URL avant de lancer le script");
            process.exit(1);
        }
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (err) {
        Logger.fatal("Erreur de connexion à MongoDB :", err.message);
        process.exit(1);
    }
}
module.exports = connectDB;