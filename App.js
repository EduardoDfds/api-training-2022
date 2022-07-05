const express = require("express");
const cors = require("cors");
const { json } = require("express");

const UserRoute = require("./routes/UserRoute.js")
const PersonalRoute = require("./routes/PersonalRoute.js")
const TrainingRoute = require("./routes/TrainingRoute.js")
const porta = process.env.PORT || 3000;

var contador = 1;

class App {
    static async init() {
        let app = new express();
        app.use(cors());    
        app.use(express.json());

        app.get("/", (req, res) => {
            res.json({
                name: "api-training-2022",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Eduardo Dias F. da Silva"
            })
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
        //new UserRoute(app)
    }
}
App.init();