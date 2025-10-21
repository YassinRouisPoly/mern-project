const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const nodemon = require("nodemon");
const l = require("./logger").default;

const articleRoutes = require("./routes/articleRoutes.js");
const usersRoutes = require("./routes/userRoutes.js");
const productsRoutes = require("./routes/productRoutes.js");

const app = express()
const connectDB = require("./config/db");
const port = 3000

async function loader() {
    l.info(" • Configuration de MongoDB ...")
    l.debug(" ├ Connexion ...")
    try {
        await connectDB();
    } catch (e) {
        l.error(" └ Impossible de connecter la DB !");
        throw e;
    }
    l.debug(" └ Connecté !")

    l.info(" • Configuration de express ...")
    l.debug(" ├ (json) ...")
    app.use(express.json())

    l.debug(" ├ # /")
    app.get("/", (req, res) => {
        res.status(200).send("<h1>Page d'accueil de notre API de Blog ! </h1>")
    })

    l.debug(" ├ # /about")
    app.get("/", (req, res) => {
        res.status(200).send("<h1>À propos</h1>")
    })

    l.debug(" ├ # /api/articles/*")
    app.use("/api/articles", articleRoutes)

    l.debug(" ├ # /api/users/*")
    app.use("/api/users", usersRoutes)

    l.debug(" ├ # /api/products/*")
    app.use("/api/products", productsRoutes)

    l.debug(" └ Terminé !")
    l.info(`Lancement du serveur sur le port ${port} ...`)
    app.listen(port, () => {
        l.success(`Serveur actif à l'adresse http://localhost:${port}/`)
    })
}

loader();