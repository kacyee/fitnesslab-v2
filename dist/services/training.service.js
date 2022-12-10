"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const models_1 = require("../models");
class TrainingService {
    static createTraining(trainingBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                models_1.Training.create({
                    name: trainingBody.name,
                    hour: trainingBody.hour,
                    date: trainingBody.date,
                })
                    .then((training) => {
                    resolve({ http_code: 201, results: training });
                })
                    .catch((err) => {
                    reject({ http_code: 500, reason: err });
                });
            });
        });
    }
    static getTrainings() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                models_1.Training.findAll({
                    include: {
                        model: user_model_1.default,
                        attributes: ['id', 'name', 'email'],
                    },
                })
                    .then((trainings) => {
                    resolve({ http_code: 201, results: trainings });
                })
                    .catch((err) => {
                    reject({ http_code: 500, reason: err });
                });
            });
        });
    }
}
exports.default = TrainingService;
