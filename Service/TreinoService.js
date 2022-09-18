"use strict";

const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Treino = Mongoose.model("Treino",Schema({ name: String }));

module.exports = class TreinoService {

    static async buscarPorId(idTreino){
        try{
            return await Treino.findById(idTreino);
        }catch(e){
            throw new Error(`TreinoService.buscarPorId ${e}`)
        }
    }
    
    static async buscarTodos(){
        try{
            return await Treino.find({})
        }catch(e){
            throw new Error(`TreinoService.bucarTodos ${e}`);
        }
        
    }

    static async salvar(treino){
        try {
            return await Exercicio.create(treino);
        } catch (e) {
            throw new Error(`TreinoService.salvar ${e}`);
        }
    }

    static async atualizar(treino){
        try {
            return await Exercicio.findOneAndUpdate(treino._id, treino);
        } catch (e) {
            throw new Error(`TreinoService.atualizar ${e}`);
        }
    }

    static async excluir (treino){
        try {
            if (!treino._id) {
                throw new Error(`A identificação do treino deve ser informada`);
            }
            return await Exercicio.findOneAndDelete({_id: treino._id});
        } catch (e) {
            throw new Error(`TreinoService.excluir ${e}`);
        }
    }


}