const express = require('express');
const router = express.Router();

// Array de produtos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Smartphone", preco: 2500 },
    { id: 3, nome: "Mouse", preco: 150 }
];

// Criar rota POST /produtos
router.post('/produtos', (req, res) => { 
    const { nome, preco } = req.body;

    // Validar dados obrigatórios
    if (!nome || !preco) {
        return res.status(400).json({ erro: "Nome e preço são obrigatórios!" });
    }

    // Criar novo produto com ID único
    const novoProduto = {
        id: Date.now(),
        nome,
        preco
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// Rota GET /produtos
router.get('/produtos', (req, res) => {
    res.json(produtos);
});

module.exports = router;
