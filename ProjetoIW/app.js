const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const clienteController = require('./controllers/clienteController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', clienteController.listarClientes);
app.get('/add', clienteController.mostrarFormularioAdicao);
app.post('/add', clienteController.adicionarCliente);
app.get('/edit/:id', clienteController.mostrarFormularioEdicao);
app.post('/edit/:id', clienteController.editarCliente);
app.post('/delete/:id', clienteController.deletarCliente);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
