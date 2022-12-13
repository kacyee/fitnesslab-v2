"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
require("dotenv/config");
const models_1 = require("../models");
const basepath = process.cwd();
const sequelize = new sequelize_typescript_1.Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    models: [models_1.User, models_1.Training, models_1.UserHasTrainings],
    repositoryMode: false,
});
console.log(basepath + "/models");
exports.default = sequelize;
