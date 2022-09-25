"user strict";

require("./config");

const express = require("express");
const cors = require("cors");
const { json } = require("express");
const FabricaConexao = require("./src/conexao/FabricaConexao");
const porta = process.env.PORT ||3000

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

        const Usuario = require("./src/domain/Usuario.js");
        new Usuario();

        const UserRoute = require("./src/routes/UserRoute.js");
        new UserRoute(app);

        const Aluno = require("./src/domain/Aluno.js");
        new Aluno();

        const AlunoRoute = require("./src/routes/AlunoRoute.js");
        new AlunoRoute(app);

        const Personal = require("./src/domain/Personal.js");
        new Personal();

        const PersonalRoute = require("./src/routes/PersonalRoute.js");
        new PersonalRoute(app);

        const Treino = require("./src/domain/Treino");
        new Treino();

        const TreinoRoute = require("./src/routes/TreinoRoute.js");
        new TreinoRoute(app);

        const Exercicio = require("./src/domain/Exercicio.js");
        new Exercicio();

        const ExercicioRoute = require("./src/routes/ExercicioRoute.js");
        new ExercicioRoute(app);

        const Medida = require("./src/domain/Medida");
        new Medida();

        const MedidaRoute = require("./src/routes/MedidaRoute.js");
        new MedidaRoute(app);




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
        
    }
}
App.init();