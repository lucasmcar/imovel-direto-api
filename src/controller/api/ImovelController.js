const imovelObj = require('../../classes/Imovel')
const MarcaClass = require('../../classes/Marca');
const UsuarioClass = require('../../classes/Usuario');

const con = require("../../../config/database/db");
const Imovel = require('../../classes/Imovel');


const TABLE_NAME = 'imovel';
/**
 * Cadastra informações do imovel
 */
exports.cadastrarImovel = (req, res) => {
    let {
        idimovel, 
        titulo, 
        tipoimovel, 
        nrcomodos, 
        nrquarto, 
        nrbanheiro, 
        espaco_garagem, 
        dtcadastro,
        idpermite_pet,
        idpermite_crianca, 
        preco, 
        descricao, 
        idusuario
    } = req.body;

    const imovelObj = new Imovel(
        idimovel, 
        titulo, 
        tipoimovel, 
        nrcomodos, 
        nrquarto, 
        nrbanheiro, 
        espaco_garagem, 
        dtcadastro, 
        idpermite_pet, 
        idpermite_crianca, 
        preco, 
        descricao, 
        idusuario
    );
    imovelObj.UsuarioId = idusuario;
    con.query('INSERT INTO ' + TABLE_NAME +' (titulo, tipoimovel, nrcomodos, nrquarto, nrbanheiro, espaco_garagem, dtcadastro, idpermite_pet, idpermite_crianca, preco, descricao, referencia, idusuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?)', 
    [
        imovelObj.Titulo, 
        imovelObj.TipoImovel, 
        imovelObj.NrComodos, 
        imovelObj.NrQuarto, 
        imovelObj.NrBanheiro, 
        imovelObj.EspacoGaragem, 
        imovelObj.DtCadastro,
        imovelObj.IdPermitePet, 
        imovelObj.IdPermiteCrianca, 
        imovelObj.Preco, 
        imovelObj.Descricao, 
        imovelObj.Referencia,
        imovelObj.UsuarioId
    ], 
    (err, results) =>{
        if(err){throw err;}
        res.statusCode = 200;
        res.json(results);
    });   
};


/**
 * Visualizações dos dados
 */



//consulta todos imoveis
exports.verTodosSimp = (req, res) =>{
    con.query('SELECT * FROM ' + TABLE_NAME  + ' ORDER BY dtcadastro desc', (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

exports.verTodosImoveis = (req, res) =>{
    con.query('SELECT * FROM ' + TABLE_NAME , (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

exports.verInfoSimplificadaImovel = (req, res) => {

}

//consulta imovel pela referencia
exports.verImovelPorRef = (req, res) =>{
    var ref = req.params.ref;
    imovelObj.Referencia = ref;
    con.query('SELECT * FROM '+ TABLE_NAME +' WHERE referencia LIKE ?', ['%'+ imovelObj.Referencia + '%'], (err, results) =>{
        if(err) {throw err}
        res.statusCode = 200;
        res.json(results);
    });
};

//consulta carro pela marca
exports.verCarrosPorMarca = (req, res) =>{
    var marca = req.params.marca;
    const marcaClass = new MarcaClass( null ,marca);
    con.query('SELECT c.nome as veiculo, m.nome as marca  FROM '+ TABLE_NAME + ' c INNER JOIN tb_marca m on c.marca_id= m.id WHERE m.nome = ?', 
    [marcaClass.Nome], (err, results) =>{
        if(err) {console.log(err);}
        res.statusCode = 200;
        res.json(results);
    });
};

exports.retornaTotalCarros = (req, res) =>{
    con.query('select count(*) as total from '+ TABLE_NAME, (err, results) => {
        if(err){throw err;}
        res.statusCode = 200
      res.json(results);
    });
}

exports.retornaTotalCarrosPorCliente = (req, res) => {
    let nomeCliente = req.params.nome;
    const clienteClass = new ClienteClass(null, nomeCliente)
    con.query("SELECT count(c.nome) as total_carroObjcl.nome as proprietario from "+ TABLE_NAME +" c inner join tb_cliente cl on c.cliente_id = cl.id where cl.nome like ?", 
    ['%'+ clienteClass.Nome +'%'],
    (err, results)=>{
        if(err){throw err;}
        res.statusCode = 200;
        res.json(results);
    });
}


/**
 * Atualização dos dados
 */


exports.editarCarro = (req, res) => {
    let {nome, cor, nrportas, tipo, ano, placa} = req.body;
    const carroObjss = new carroObjss(nome, cor, nrportas, tipo, ano, placa);
    carroObjss.Placa = placa;
    nrportas = parseInt(nrportas);
    if(placa != undefined && (nome != undefined || 
        cor != undefined || 
        nrportas != 0 || tipo != undefined)){
        con.query('UPDATE '+ TABLE_NAME +' SET nome = ?, cor = ?, nrportas = ?, tipo = ?, ano = ? WHERE placa = ?', 
        [carroObjss.Nome, carroObjss.Cor, carroObjss.NrPortas, carroObjss.Tipo, carroObjss.Ano, carroObjss.Placa], 
        (err, results) => {
            if(err){throw err;}
            res.statusCode = 200;
            res.json(results.affectedRows)
        });
    }   
}

/**
 * Deleção dos dados
 */

exports.apagarCarro = (req, res) => {
    let placa = req.body.placa;
    const carroObjss = new carroObjss(null, null, null, null, null, placa);
    carroObjss.Placa = placa;
    if(placa != undefined){
        con.query('DELETE FROM '+ TABLE_NAME +' WHERE placa = ?', [carroObjss.Placa],
        (err, results) => {
            if(err){ throw err;}
            res.statusCode = 200;
            res.json(results.affectedRows)
        });
    }
}
