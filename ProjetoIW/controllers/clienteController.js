const db = require('../db');

exports.listarClientes = (req, res) => {
    db.query('SELECT * FROM clientes', (err, results) => {
        if (err) throw err;
        res.render('index', { clientes: results });
    });
};

exports.mostrarFormularioAdicao = (req, res) => {
    res.render('add');
};

exports.adicionarCliente = (req, res) => {
    const { nome, email, telefone } = req.body;
    db.query('INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.mostrarFormularioEdicao = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM clientes WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.render('edit', { cliente: result[0] });
    });
};

exports.editarCliente = (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;
    db.query('UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.deletarCliente = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM clientes WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
};
