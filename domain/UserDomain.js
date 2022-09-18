"use strict";

const { default: mongoose } = require("mongoose");
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
        mongoose.model("Usuario",this);
    }
}