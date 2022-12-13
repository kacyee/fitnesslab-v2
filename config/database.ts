import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import { User, Training, UserHasTrainings } from "../models";

const basepath = process.cwd();
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  models: [User, Training, UserHasTrainings],
  repositoryMode: false,
});
console.log(basepath + "/models");

export default sequelize;
