"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.ProductsInt = new exports.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },
    accessories: { type: Boolean, required: false },
    caliber: { type: Boolean, required: false },
    cover: { type: Boolean, required: false },
    high: { type: Boolean, required: false },
    install: { type: Boolean, required: false },
    long: { type: Boolean, required: false },
    molding: { type: Boolean, required: false },
    parallel: { type: Boolean, required: false },
    quantity: { type: Boolean, required: false },
    size: { type: Boolean, required: false },
    thickness: { type: Boolean, required: false },
    width: { type: Boolean, required: false }
}, { collection: 'productsInt' });
const ProductsIntModel = mongoose_1.default.model('ProductsInt', exports.ProductsInt);
exports.default = ProductsIntModel;
