const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/produtos', produtoController.produtos);
router.get('/detalhes', produtoController.detalhes);

module.exports = router;