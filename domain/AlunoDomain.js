"use strict";

const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const Personal = require("./PersonalDomain");

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
            personal: Personal
        });
        mongoose.model("Aluno",this);
    }
}