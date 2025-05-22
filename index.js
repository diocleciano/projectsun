const express = require('express');
const app = express();



// Criar uma rota GET básica
app.get('/', (req, res) => {
    res.send('API funcionando');
});


const produtosRoutes = require('./routes/produtos');
app.use(produtosRoutes);


// 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});