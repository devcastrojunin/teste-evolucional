const express =  require('express');
const path =  require('path');

const app = express();

app.use(express.static('./dist/teste-evolucional'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/teste-evolucional/'}),
);

app.listen(process.env.PORT || 8080);