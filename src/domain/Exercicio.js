"use strict";

const Mongoose = require("mongoose");


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
        });
        Mongoose.model("Exercicio", this);
    }
}