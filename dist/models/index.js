"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHasTrainings = exports.Training = exports.User = void 0;
const user_model_1 = __importDefault(require("./user.model"));
exports.User = user_model_1.default;
const training_model_1 = __importDefault(require("./training.model"));
exports.Training = training_model_1.default;
const user_has_trainings_model_1 = __importDefault(require("./user_has_trainings.model"));
exports.UserHasTrainings = user_has_trainings_model_1.default;
