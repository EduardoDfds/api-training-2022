"use strict";

const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const Aluno = require("./AlunoDomain");

module.exports = class Treino extends Mongoose.Schema{
    constructor(){
        super({
            nome: String,
            status: String,
            ordem: Number,
            dataCadastro: Date,
            dataAtualizacao: Date,
            aluno: Aluno
        });
        mongoose.model("Treino",this);
    }
}