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
    dateCreate: { type: Date, required: false },
    adress: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    credit: { type: Number, required: false },
    phoneNumber: { type: String, required: false },
    key_account: { type: String, required: false },
    colony: { type: String, required: false },
    number: { type: String, required: false },
    comercialName: { type: String, required: false },
    branch: { type: String, required: false },
    bank: { type: String, required: false },
    creditDay: { type: Number, required: false },
    comment: { type: String, required: false },
    street: { type: String, required: false },
    NoExt: { type: String, required: false },
    NoInt: { type: String, required: false },
    location: { type: String, required: false },
    CP: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    country: { type: String, required: false }
}, { collection: 'providers' });
const ProveedorModel = mongoose_1.default.model('Provider', exports.Provider);
exports.default = ProveedorModel;
