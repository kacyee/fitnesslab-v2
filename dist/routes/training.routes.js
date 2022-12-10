"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const training_controller_1 = __importDefault(require("../controllers/training.controller"));
class trainingRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.trainingController = new training_controller_1.default();
        this.createRoutes();
    }
    getRouter() {
        return this.router;
    }
    createRoutes() {
        this.router.post('/create-training', this.trainingController.createTraining);
        this.router.get('/', this.trainingController.getTrainings);
    }
}
exports.default = trainingRoutes;
