"use strict";

class Config {

    static createConfig(){
        global.config = {
            port: process.env.PORT || 3000,
            db:{
                name: "Training",
                url:"cluster0.cn8jmu8.mongodb.net",
                username:"Training",
                password:"dueduedudu"
            }
        }
    }
}

module.exports = Config.createConfig()