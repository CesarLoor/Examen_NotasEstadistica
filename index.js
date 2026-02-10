const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Integración continua');
});

app.listen(port, () => {
    console.log(`Servidor trabajando en el puerto ${port}`);
});

