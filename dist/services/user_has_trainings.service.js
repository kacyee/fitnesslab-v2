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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class UserHasTrainingsService {
    static setTrainingToUser({ user_id, training_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                models_1.UserHasTrainings.create({
                    user_id: user_id,
                    training_id: training_id,
                })
                    .then(userHasTrainings => {
                    resolve({ http_code: 201, results: userHasTrainings });
                })
                    .catch((err) => {
                    console.log(err);
                    reject({ http_code: 500, reason: 'Sequelize ORM error.' });
                });
            });
        });
    }
}
exports.default = UserHasTrainingsService;
