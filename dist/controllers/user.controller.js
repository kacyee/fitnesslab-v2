"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt = __importStar(require("bcrypt"));
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
    signInUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_service_1.default.getUserByEmail(req.body.email);
            if (!user) {
                return res.status(401).json({ message: 'User does not exists.' });
            }
            const isPasswordValid = bcrypt.compare(req.body.password, user.password);
            if (!isPasswordValid)
                return res.status(403).json({ message: 'Wrong password' });
            const token = jwt.sign({ id: user.id }, process.env.secret);
            return res.status(201).json({ token: token });
        });
    }
}
exports.default = UserController;
