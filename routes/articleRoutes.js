const express = require('express');
const router = express.Router();

const { createArticle, getAllArticles} = require('../controllers/articleController');


router.post("/", createArticle);
router.get("/", getAllArticles);


module.exports = router;