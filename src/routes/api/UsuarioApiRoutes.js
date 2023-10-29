const express = require('express');
const usuarioController = require('../../controller/api/UsuarioController');

const router = express.Router();

/*router
    .route('/teste')
    .get(usuarioController.testePage);*/

router
    .route('/api/usuario/valida/:user')
    .get(usuarioController.validaUsuario)

router
    .route('/api/usuario/novo')
    .post(usuarioController.inserirUsuario);  

/*router
    .route('/api/cliente/:id')
    .get(usuarioController.verClientePeloId)
    .patch(usuarioController.atualizarCliente)
    .delete(usuarioController.removerCliente);*/

module.exports = router;