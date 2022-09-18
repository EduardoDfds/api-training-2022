"use strict";

const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const Aluno = require("./AlunoDomain");

module.exports = class Medida extends Mongoose.Schema{
    constructor(){
        super({
            altura: Number,
            peso: Number,
            serie: Number,
            cintura: Number,
            braco: Number,
            quadril: Number,
            perna:Number,
            dataAvaliacao: Date,
            dataAtualizacao: Date,
            aluno: Aluno
        });
        mongoose.model("Medida",this);
    }
}