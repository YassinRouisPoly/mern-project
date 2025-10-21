import Logger from "./logger.js";
import express from "express";
import articleRoutes from "./routes/articleRoutes.js";
import userRoutes from "./routes/userRoutes.js";

Logger.info("Démarrage du serveur ...")
const app = express()
const PORT = process.env.PORT || 3000

Logger.log("Préparation des routes ...")
Logger.debug(" ├ (json) ...")
app.use(express.json());


Logger.debug(" ├ GET / ... [html]")
app.get("/", (req, res) => {
    res.status(200).send(
        `<h1>Page d'accueil de notre API</h1>`
    )
})

Logger.debug(" ├ USE /api/articles ...")
app.use("/api/articles", articleRoutes)

Logger.debug(" ├ USE /api/users ...")
app.use("/api/users", userRoutes)

Logger.debug(" └ Terminé !")

app.listen(PORT, () => {
    Logger.success("Serveur démarré avec succès")
    Logger.success(" ├ ADDR : http://localhost:" + PORT + "/")
    Logger.success(" └ PORT : " + PORT)
})