"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.Provider = new exports.Schema({
    businesName: { type: String, required: false },
    rfc: { type: String, required: false },
    legalRepresentative: { type: String, required: false },
    contact: { type: String, required: false },
    adress: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    credit: { type: Number, required: false },
    phoneNumber: { type: String, required: false },
}, { collection: 'providers' });
const ProveedorModel = mongoose_1.default.model('Provider', exports.Provider);
exports.default = ProveedorModel;
