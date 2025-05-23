const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.send('API funcionando');
});

// Importar e usar rotas de produtos
const produtosRoutes = require('./routes/produtos');
app.use('/api', produtosRoutes);

// Definir porta e iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
