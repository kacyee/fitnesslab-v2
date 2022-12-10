"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const user_service_1 = __importDefault(require("../services/user.service"));
const user_has_trainings_service_1 = __importDefault(require("../services/user_has_trainings.service"));
class UserController {
    constructor() { }
    signUp() { }
    createUser(req, res) {
        let userBody = req.body;
        user_service_1.default.creatUser(userBody)
            .then((resp) => {
            return res.status(resp.http_code).json(resp.results);
        })
            .catch((err) => {
            return res.status(err.http_code).json(err.reason);
        });
    }
    getUsers(req, res) {
        user_service_1.default.getUsers()
            .then((resp) => {
            return res.status(resp.http_code).json(resp.results);
        })
            .catch((err) => {
            return res.status(err.http_code).json(err.reason);
        });
    }
    setTrainingToUser(req, res) {
        let userTrainingBody = req.body;
        user_has_trainings_service_1.default.setTrainingToUser(userTrainingBody)
            .then((resp) => {
            return res.status(resp.http_code).json(resp.results);
        })
            .catch((err) => {
            return res.status(err.http_code).json(err.reason);
        });
    }
}
exports.default = UserController;
