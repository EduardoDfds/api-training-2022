"use strict";
const Mongoose = require("mongoose");

module.exports = class Usuario extends Mongoose.Schema{
    constructor(){
        super({
            nome: String,
            sobrenome: String,
            email: String,
            senha: String,
            permissao: String,
            status: String,
            dataCadastro: Date,
            dataAcesso: Date,
            dataAtualizacao: Date
        });
        Mongoose.model("Usuario",this);
    }
}