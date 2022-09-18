"user strict";

require("./config");

const express = require("express");
const cors = require("cors");
const { json } = require("express");
const FabricaConexao = require("./src/conexao/FabricaConexao");
const porta = process.env.PORT ||3000

const UserRoute = require("./routes/UserRoute.js");
const PersonalRoute = require("./routes/PersonalRoute.js");
const TreinoRoute = require("./routes/TreinoRoute.js");
const AlunoRoute = require("./routes/AlunoRoute.js");
const ExercicioRoute = require("./routes/ExercicioRoute.js");
const AvaliacaoFisica = require("./routes/AvaliacaoFisicaRoute.js")



class App {
    static async init() {
        let app = new express();
        app.use(cors());    
        app.use(express.json());

        try {
            console.log("Obtendo conexão com o banco de dados...");
            await FabricaConexao.obterConexao();
            console.log("Banco conectado com sucesso!");
        } catch (error) {
            console.log(
                `Erro ao conectar com o banco de dados: ${error.message}`);
            process.exit(1);
        }

        app.get("/", (req, res) => {
            res.json({
                name: "api-training-2022",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Eduardo Dias F. da Silva"
            })
        })

        app.get("/ping", (req, res) => {
            res.json({ "Resposta": "pong" })
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
        //new UserRoute(app)
    }
}
App.init();