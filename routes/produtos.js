const express = require('express');
const router = express.Router();

// Array de produtos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Smartphone", preco: 2500 },
    { id: 3, nome: "Mouse", preco: 150 }
];

// Rota GET /produtos
router.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Rota POST /produtos
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
    router.put('/produtos/:id', (req, res) => {
        const { id } = req.params;
        const { nome, preco } = req.body;

        // Validar dados obrigatórios
        if (!nome || !preco) {
            return res.status(400).json({ erro: "Nome e preço são obrigatórios!" });
        }

        // Encontrar produto pelo ID
        const produtoIndex = produtos.findIndex(produto => produto.id == id);
        if (produtoIndex === -1) {
            return res.status(404).json({ erro: "Produto não encontrado!" });
        }

        // Atualizar produto
        produtos[produtoIndex] = { id: Number(id), nome, preco };
        res.json(produtos[produtoIndex]);
    });

router.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;

    // Encontrar produto pelo ID
    const produtoIndex = produtos.findIndex(produto => produto.id == id);
    if (produtoIndex === -1) {
        return res.status(404).json({ erro: "Produto não encontrado!" });
    }

    // Remover produto
    produtos.splice(produtoIndex, 1);
    res.status(204).send();
}





module.exports = router;