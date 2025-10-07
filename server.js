import Logger from "./logger.js";
import express from "express";

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

Logger.debug(" ├ GET /about ... [html]")
app.get("/about", (req, res) => {
    res.status(200).send(
        `<h1>Ceci est la route À propos</h1>`
    )
})

Logger.debug(" ├ POST /contact ... [json]")
app.post("/contact", (req, res) => {
    const {email, message} = req.body;

    if (!email || !message) {
        return res.status(400).send({
            message: "Un champ est manquant (email, message).",
            success: false
        })
    }

    res.status(200).json({
        message: `Message envoyé à ${email} (len. ${message.length})`,
        success: true
    })
})


Logger.debug(" ├ GET /api/test ... [json]")
app.get("/api/test", (req, res) => {
    res.status(200).json({
        message: "Le test fonctionne !",
        success: true
    })
})


Logger.debug(" ├ GET /api/users ... [json]")
app.get("/api/users", (req, res) => {
    const users = [
        {username: "Martin L."},
        {username: "Yassin R."},
        {username: "Abdoul J."}
    ]

    res.status(200).json({
        users,
        success: true
    })
})


Logger.debug(" ├ POST /api/articles ... [json]")
app.post("/api/articles", (req, res) => {
    const articleData = req.body;
    Logger.success("Données reçues : " + articleData);

    res.status(201).json({
        message: "Article créé avec succès !",
        article: {
            ...articleData,
            id: Date.now()
        },
        success: true
    })
})

Logger.debug(" └ Terminé !")

app.listen(PORT, () => {
    Logger.success("Serveur démarré avec succès")
    Logger.success(" ├ ADDR : http://localhost:" + PORT + "/")
    Logger.success(" └ PORT : " + PORT)
})