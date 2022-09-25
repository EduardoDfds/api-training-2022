"use strict";

const Mongoose = require("mongoose");

module.exports = class Aluno extends Mongoose.Schema{
    constructor(){
        super({
            nome: String,
            sobrenome: String,
            email: String,
            senha: String,
            permissao: String,
            telefone: String,
            status: String,
            frequencia: Number,
            dataCadastro: Date,
            dataAcesso: Date,
            dataAtualizacao: Date,
        });
        Mongoose.model("Aluno",this);
    }
}