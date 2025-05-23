const express = require('express');
const app = express();

app.use(express.json());

// Criar uma rota GET básica
app.get('/', (req, res) => {
    res.send('API funcionando');
});

// rota post
const produtosRoutes = require('./routes/produtos');
app.use(produtosRoutes);


// 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});