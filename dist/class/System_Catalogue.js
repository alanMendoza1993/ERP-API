"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.Catalogue = new exports.Schema({
    name: { type: String, required: false },
    element_name: { type: Boolean, required: false },
    element_image: { type: Boolean, required: false },
    element_currency: { type: Boolean, required: false },
    element_discount: { type: Boolean, required: false },
    element_value: { type: Boolean, required: false },
}, { collection: 'catalogue' });
const CatalogueModel = mongoose_1.default.model('Catalogue', exports.Catalogue);
exports.default = CatalogueModel;
