const express = require('express');
const imovelController = require('../../controller/api/ImovelController');

const router = express.Router();

router
    .route('/api/imovel/novo')
    .post(imovelController.cadastrarImovel);


/*router
    .route('/api/imovel/detalhes')
    .post(imovelController.cadastrarDetalhes);*/

router
    .route('/api/imovel/:ref')
    .get(imovelController.verImovelPorRef)
    //.put(imovelController.editarCarro)
    //.delete(imovelController.apagarCarro);

/*router
    .route('/api/carro/marca/:marca')
    .get(imovelController.verCarrosPorMarca);*/

router
    .route('/api/imoveis/')
    .get(imovelController.verTodosSimp);

/*router
    .route('/api/nrcarros/')
    .get(imovelController.retornaTotalCarros);

router
    .route('/api/nrcarros/:nome')
    .get(imovelController.retornaTotalCarrosPorCliente);*/

module.exports = router;