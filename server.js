const app = require('./src/config/custom-express');
const server = require('http').Server(app);

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});
