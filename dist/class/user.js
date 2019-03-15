"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.User = new exports.Schema({
    userName: { type: String, required: false },
    password: { type: String, required: true },
    roster: { type: String, required: false },
    perfilType: { type: String, required: false },
    status: { type: Boolean, required: false },
    email: { type: String, required: false },
    employeeId: { type: exports.Schema.Types.ObjectId, ref: 'Employed', required: false } // descuentoo
}, { collection: 'users' });
const UserModel = mongoose_1.default.model('User', exports.User);
exports.default = UserModel;
