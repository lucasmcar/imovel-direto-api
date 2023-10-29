/**
 * Modelo da tabela detalhe_imovel
 */

module.exports = class DetalheImovel {


    constructor(
        iddetalhe_imovel,
        descricao,
        preco,
        idimovel
    ){
        this._iddetalhe_imovel = iddetalhe_imovel;
        this._descricao = descricao;
        this._preco = preco;
        this._idimovel = idimovel;
    }

}