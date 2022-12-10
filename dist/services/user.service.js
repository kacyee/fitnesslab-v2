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
class UserService {
    static creatUser(userBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                user_model_1.default.create({
                    name: userBody.name,
                    password: userBody.password,
                    email: userBody.email,
                })
                    .then((user) => {
                    resolve({ http_code: 201, results: user });
                })
                    .catch((err) => {
                    reject({ http_code: 500, reason: 'Sequelize ORM error.' });
                });
            });
        });
    }
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                user_model_1.default.findAll({
                    include: {
                        model: models_1.Training,
                        attributes: ['id', 'name', 'hour', 'date'],
                    },
                })
                    .then((users) => {
                    resolve({ http_code: 201, results: users });
                })
                    .catch((err) => {
                    reject({ http_code: 500, reason: err });
                });
            });
        });
    }
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                user_model_1.default.findOne({
                    where: {
                        email: email,
                    },
                })
                    .then(user => {
                    resolve(user);
                })
                    .catch((err) => {
                    reject({ http_code: 500, reason: err });
                });
            });
        });
    }
    static setTrainingToUser({ user_id, training_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                user_model_1.default.findByPk(user_id)
                    .then(user => {
                    user === null || user === void 0 ? void 0 : user.setTraining([training_id]);
                })
                    .then(user => {
                    resolve({ http_code: 201, results: user });
                })
                    .catch((err) => {
                    console.log(err);
                    reject({ http_code: 500, reason: err });
                });
            });
        });
    }
    static signInUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                user_model_1.default.findOne({
                    where: {
                        email: email,
                    },
                })
                    .then(user => {
                    if (!user)
                        throw { responseCode: 401, reason: 'User does not exists' };
                    // const isPasswordValid = bcrypt.compareSync(password, user!.password);
                    // console.log('here', isPasswordValid);
                    // if (!isPasswordValid) reject({ responseCode: 401 });
                    // const token = jwt.sign({ id: user!.id }, process.env.secret!);
                    // resolve({ http_code: 200, user: { user, token } });
                })
                    .catch(err => {
                    reject({ http_code: 404, reason: err });
                });
            });
        });
    }
}
exports.default = UserService;
