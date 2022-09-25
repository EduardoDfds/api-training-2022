"use strict";

const Mongoose = require("mongoose");


module.exports = class Treino extends Mongoose.Schema{
    constructor(){
        super({
            nome: String,
            status: String,
            ordem: Number,
            dataCadastro: Date,
            dataAtualizacao: Date
        });
        Mongoose.model("Treino", this);
    }
}