"use strict";
const Mongoose = require("mongoose");

module.exports = class Personal extends Mongoose.Schema{
    constructor(){
        super({
            nome: String,
            sobrenome: String,
            email: String,
            senha: String,
            permissao: String,
            status: String,
            cref: String,
            validadeCref: Date,
            dataCadastro: Date,
            dataAcesso: Date,
            dataAtualizacao: Date
        });
        Mongoose.model("Personal", this);
    }
}