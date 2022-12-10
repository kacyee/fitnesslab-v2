"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const training_service_1 = __importDefault(require("../services/training.service"));
class TrainingController {
    constructor() { }
    createTraining(req, res) {
        let trainingBody = req.body;
        training_service_1.default.createTraining(trainingBody)
            .then((resp) => {
            return res.status(resp.http_code).json(resp.results);
        })
            .catch((err) => {
            return res.status(err.http_code).json(err.reason);
        });
    }
    getTrainings(req, res) {
        training_service_1.default.getTrainings()
            .then((resp) => {
            return res.status(resp.http_code).json(resp.results);
        })
            .catch((err) => {
            return res.status(err.http_code).json(err.reason);
        });
    }
}
exports.default = TrainingController;
