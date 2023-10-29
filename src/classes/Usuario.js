/**
 * Modelo da tabela usuario
 */
module.exports = class Usuario {

    constructor(idusuario, nome, username, email, senha, telefone, isWhats, dtcadastro, rate, idtipo){
        this._idusuario = idusuario
        this._nome = nome;
        this._username = username;
        this._telefone = telefone;
        this._isWhats = isWhats;
        this._email = email;
        this._senha = senha;
        this._dtcadastro = dtcadastro;
        this._rate = rate;
        this._idtipo = idtipo;
        
    }

    set IdUsuario(idusuario){
        this._idusuario = idusuario;
    }

    get IdUsuario(){
        return this._idusuario;
    }

    set Nome(nome){
        this._nome = nome
    }

    get Nome(){
        return this._nome;
    }

    set UserName(username){
        this._username = username
    }

    get UserName(){
        return this._username;
    }

    set Telefone(telefone){
        this._telefone = telefone;
    }

    get Telefone(){
        return this._telefone;
    }

    set IsWhats(isWhats){
        this._isWhats = isWhats;
    }

    get IsWhats(){
        return this._isWhats;
    }

    set Email(email){
        this._email = email;
    }

    get Email(){
        return this._email;
    }
    
    set Senha(senha){
        this._senha = senha;
    }

    get Senha(){
        return this._senha;
    }

    set DtCadastro(dtcadastro){
        this._dtcadastro = dtcadastro;
    }

    get DtCadastro(){
        return this._dtcadastro;
    }

    set UserRate(rate){
        this._rate = rate;
    }

    get UserRate(){
        return this._rate;
    }

    set IdTipoUsuario(idtipo){
        this._idtipo = idtipo;
    }

    get IdTipoUsuario(){
        return this._idtipo;
    }

}