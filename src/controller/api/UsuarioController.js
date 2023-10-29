const usuarioClass = require('../../classes/Usuario')
const con = require("../../../config/database/db");
const { json } = require('express');

//Rota listagem de clientes
exports.validaUsuario = (req, res) =>{
    var user = req.params.user;
    usuarioClass.UserName = user
    con.query('SELECT nome, username FROM usuario where username like ?', ['%'+ usuarioClass.UserName+'%'], (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

//Listagem de cliente por id
exports.verClientePeloId = (req, res) =>{
    var id = req.params.id;
    const clienteClass = new UsuarioClass(id);
    con.query('SELECT * FROM tb_cliente WHERE id = ?', [clienteClass.Id], (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
}

//cadastro novo cliente
exports.inserirUsuario = (req, res) =>{
    let {nome, username, email, senha, dtCadastro, idtipo} = req.body;
        let usuarioClass = new UsuarioClass(null, nome, username, email, senha, null, null, dtCadastro, idtipo);
        con.query('INSERT INTO usuario (nome, username, email, senha, contato, idwhats, dtcadastro, idtipo_usuario) values (?,?,?,?,?,?,?,?)', 
        [
            usuarioClass.Nome, 
            usuarioClass.UserName, 
            usuarioClass.Email, 
            usuarioClass.senha, 
            usuarioClass.Telefone, 
            usuarioClass.IsWhats, 
            usuarioClass.DtCadastro, 
            usuarioClass.idtipo
        ],
        (err, res) => {
            if(err){res.json('{"status_code": 400, "status" : "erro", "msg" : '+err+'"}')}
            res.statusCode = 200;
            res.json(res.affectedRows);
        })
}

exports.atualizarCliente = (req, res) =>{

}

exports.removerCliente = (req, res) =>{
    
}


exports.testePage = (req, res) =>{
    res.render('index');
};




