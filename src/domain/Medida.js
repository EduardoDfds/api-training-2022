"use strict";

const Mongoose = require("mongoose");

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
        });
        Mongoose.model("Medida",this);
    }
}