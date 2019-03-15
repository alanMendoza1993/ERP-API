"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.Element = new exports.Schema({
    name: { type: String, required: false },
    discount: { type: Number, required: false },
    valor: { type: Number, required: false },
    currency: { type: String, required: false },
    image: { type: String, required: false },
    idCatalogue: { type: String, required: false, ref: 'Catalogue' },
});
const ElementModel = mongoose_1.default.model('Element', exports.Element);
exports.default = ElementModel;
