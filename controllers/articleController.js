const Logger = require("../logger").default;

const testAPI = (req, res) => {
    res.status(200).json({
        message: "Le test a bien fonctionné",
        success: true
    })
}
const createArticle = async (req, res) => {
    const articleData = req.body;
    Logger.success("Données reçues par le contrôleur : " + articleData);
    res.status(201).json({
        message: "Article créé avec succès via le contrôleur !",
        article: articleData,
        success: true
    })
}

module.exports = {
    testAPI, createArticle
}