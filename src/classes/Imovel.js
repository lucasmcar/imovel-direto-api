
module.exports = class Imovel {

    
    constructor(
        idimovel,
        titulo,
        tipoimovel,
        nrcomodos,
        nrquarto,
        nrbanheiro,
        espaco_garagem,
        datacadastro,
        idpermite_pet,
        idpermite_crianca,
        preco,
        descricao,
        referencia,
        idusuario){
        this._idimovel = idimovel;
        this._titulo = titulo;
        this._tipoimovel = tipoimovel;
        this._nrcomodos = nrcomodos;
        this._nrquarto = nrquarto;
        this._nrbanheiro = nrbanheiro;
        this._espaco_garagem = espaco_garagem;
        this._datacadastro = datacadastro;
        this._idpermite_pet = idpermite_pet;
        this._idpermite_crianca = idpermite_crianca;
        this._preco = preco;
        this._descricao = descricao;
        this._referencia = referencia;
        this._idusuario = idusuario;
    }
    
    
    

    set IdImovel(idimovel){
        this._idimovel = idimovel;
    }

    get IdImovel(){
        return this._idimovel;
    }

    set Titulo(titulo){
        this._titulo = titulo;
    }

    get Titulo(){
        return this._titulo;
    }

    set TipoImovel(tipoImovel){
        this._tipoimovel = tipoImovel
    }

    get TipoImovel(){
        return this._tipoimovel;
    }

    set NrComodos(nrcomodos){
        this._nrcomodos = nrcomodos;
    }

    get NrComodos(){
        return this._nrcomodos;
    }

    set NrQuarto(nrquarto){
        this._nrquarto = nrquarto;
    }

    get NrQuarto(){
        return this._nrquarto;
    }

    set NrBanheiro(nrbanheiro){
        this._nrbanheiro = nrbanheiro;
    }

    get NrBanheiro(){
        return this._nrbanheiro;
    }

    set EspacoGaragem(espaco_garagem){
        this._espaco_garagem = espaco_garagem;
    }

    get EspacoGaragem(){
        return this._espaco_garagem;
    }

    set DtCadastro(dtcadastro){
        this._datacadastro = dtcadastro;
    }

    get DtCadastro(){
        return this._datacadastro;
    }

    set IdPermitePet(idpermite_pet){
        this._idpermite_pet = idpermite_pet;
    }

    get IdPermitePet(){
        return this._idpermite_pet;
    }

    set IdPermiteCrianca(idpermite_crianca){
        this._idpermite_crianca = idpermite_crianca;
    }

    get IdPermiteCrianca(){
        return this._idpermite_crianca;
    }

    set Preco(preco){
        this._preco = preco;
    }

    get Preco(){
        return this._preco;
    }

    set Descricao(descricao){
        this._descricao = descricao;
    }

    get Descricao(){
        return this._descricao;
    }

    set Referencia(referencia){
        this._referencia = referencia;
    }

    get Referencia(){
        return this._referencia;
    }
    get UsuarioId (){
        return this._idusuario
    }

    set UsuarioId(idusuario){
        this._idusuario = idusuario;
    }
}