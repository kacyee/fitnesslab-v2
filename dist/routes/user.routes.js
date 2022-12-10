"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userController = new user_controller_1.default();
        this.createRoutes();
    }
    getRouter() {
        return this.router;
    }
    createRoutes() {
        this.router.post('/create-user', this.userController.createUser);
        this.router.get('/', this.userController.getUsers);
        this.router.post('/add-training', this.userController.setTrainingToUser);
    }
}
exports.default = UserRoutes;
