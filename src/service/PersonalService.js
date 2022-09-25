"use strict";

const Mongoose = require("mongoose");
const PersonalDomain = Mongoose.model('Personal');

module.exports = class PersonalService {
    
    static async buscarPorId(idPersonal){
        try{
            return await PersonalDomain.findById(idPersonal);
        }catch(e){
            throw new Error(`PersonalService.buscarPorId ${e}`)
        }
    }
    
    static async buscarTodos(){
        try{
            return await PersonalDomain.find({})
        }catch(e){
            throw new Error(`PersonalService.bucarTodos ${e}`);
        }
        
    }

    static async salvar(personal){
        try {
            return await PersonalDomain.create(personal);
        } catch (e) {
            throw new Error(`PersonalService.salvar ${e}`);
        }
    }

    static async atualizar(personal){
        try {
            return await PersonalDomain.findOneAndUpdate(personal._id, personal);
        } catch (e) {
            throw new Error(`PersonalService.atualizar ${e}`);
        }
    }

    static async excluir (personal){
        try {
            if (!personal._id) {
                throw new Error(`A identificação do personal deve ser informada`);
            }
            return await PersonalDomain.findOneAndDelete({_id: personal._id});
        } catch (e) {
            throw new Error(`PersonalService.excluir ${e}`);
        }
    }

}