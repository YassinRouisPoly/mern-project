const l = require("../logger.js").default;
const Article = require("../models/article");

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (err) {
        l.error(err);
        res.status(500).json({errorMessage: "Erreur lors de la récupération des articles.", success: false});
    }
}

const createArticle = async (req, res) => {
    try {
        const {title, content, author} = req.body;
        const articleData = {title, content, author};
        const newArticle = new Article(articleData);

        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (err) {
        res.status(400).json({
            errorMessage: "Erreur lors de la création de l'article",
            success: false
        })
    }
}

module.exports = {
    createArticle, getAllArticles
}