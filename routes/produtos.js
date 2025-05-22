const express = require('express');
const router = express.Router();

// produtos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Smartphone", preco: 2500 },
    { id: 3, nome: "Mouse", preco: 150 }
];

// rota GET /produtos
router.get('/produtos', (req, res) => {
    res.json(produtos);
});

module.exports = router;
