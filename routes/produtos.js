const express = require('express');
const router = express.Router();

// produtos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Smartphone", preco: 2500 },
    { id: 3, nome: "Mouse", preco: 150 }
];


<<<<<<< HEAD
Router.post('/produtos', (req, res)=> { 
    const {nome, preco} = req.body;
    //calma ja volto
})
=======
router.post('/produtos', (req, res)=> { 
    const {nome, preco} = req.body;

    //validar dados
    if (!nome || !preco) {
        return res.status(400).json({erro:"nome e preco sao obrigatorios"})    }
    //faz isso pra todos

    //cria novo produto
    const novoProduto = {
        id:produtos.length + 1, nome, preco
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);

});


>>>>>>> d4f9cae (aperfeiçoar)
// rota GET /produtos
router.get('/produtos', (req, res) => {
    res.json(produtos);
});

module.exports = router;
