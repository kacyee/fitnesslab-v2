"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const training_routes_1 = __importDefault(require("./training.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const router = (0, express_1.Router)();
const userRouter = new user_routes_1.default();
const trainingRouter = new training_routes_1.default();
router.use('/users', userRouter.getRouter());
router.use('/trainings', trainingRouter.getRouter());
exports.default = router;
