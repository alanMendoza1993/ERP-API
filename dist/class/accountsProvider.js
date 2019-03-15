"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.AccountProvider = new exports.Schema({
    password: { type: String, required: false },
    email: { type: String, required: false },
    providerId: { type: String, required: false },
    active: { type: Boolean, required: false },
}, { collection: 'accountProvider' });
const AccountProviderModel = mongoose_1.default.model('AccountProvider', exports.AccountProvider);
exports.default = AccountProviderModel;
