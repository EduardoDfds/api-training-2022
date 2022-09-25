"use strict";

const Mongoose = require("mongoose");
const Exercicio = Mongoose.model("Exercicio");

module.exports = class ExercicioService {

    static async buscarPorId(idExercicio){
        try{
            return await Exercicio.findById(idExercicio);
        }catch(e){
            throw new Error(`ExercicioService.buscarPorId ${e}`)
        }
    }
    
    static async buscarTodos(){
        try{
            return await Exercicio.find({})
        }catch(e){
            throw new Error(`ExercicioService.bucarTodos ${e}`);
        }
        
    }

    static async salvar(exercicio){
        try {
            return await Exercicio.create(exercicio);
        } catch (e) {
            throw new Error(`ExercicioService.salvar ${e}`);
        }
    }

    static async atualizar(exercicio){
        try {
            return await Exercicio.findOneAndUpdate(exercicio._id, exercicio);
        } catch (e) {
            throw new Error(`ExercicioService.atualizar ${e}`);
        }
    }

    static async excluir (exercicio){
        try {
            if (!exercicio._id) {
                throw new Error(`A identificação do exercicio deve ser informada`);
            }
            return await Exercicio.findOneAndDelete({_id: exercicio._id});
        } catch (e) {
            throw new Error(`ExercicioService.excluir ${e}`);
        }
    }

}