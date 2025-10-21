
const express = require('express');
const router = express.Router();

const { testAPI, createArticle } = require('../controllers/articleController');


router.get("/test", testAPI);
router.post("/", createArticle);

module.exports = router;