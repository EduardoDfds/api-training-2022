"use strict";

const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const Aluno = require("./AlunoDomain");

module.exports = class Exercicio extends Mongoose.Schema{
    constructor(){
        super({
            nome: String,
            peso: Number,
            serie: Number,
            categoria: String,
            tipo: String,
            repeticao: Number,
            dataCadastro: Date,
            dataAtualizacao: Date,
            aluno: Aluno
        });
        mongoose.model("Exercicio",this);
    }
}