"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.Products = new exports.Schema({
    name: { type: String, required: false },
    title: { type: String, required: false },
    sku: { type: String, required: false },
    waitTime: { type: Number, required: false },
    rode: { type: String, required: false },
    ivaType: { type: String, required: false },
    costing: { type: Number, required: false },
    IEPStype: { type: String, required: false },
    category: { type: exports.Schema.Types.ObjectId, ref: 'Material', required: false },
    production: { type: String, required: false },
    unitSize: { type: String, required: false },
    minPurchase: { type: Number, required: false },
    ID: { type: String, required: false },
    noProduct: { type: String, required: false },
    code: { type: String, required: false },
    vol: { type: String, required: false },
    weight: { type: Number, required: false },
    price: { type: Number, required: false },
    iva: { type: Number, required: false },
    MN: { type: String, required: false },
    IEPS: { type: String, required: false },
    type: { type: String, required: false },
    typeBuy: { type: String, required: false },
    cfdi: { type: String, required: false },
    cfdiU: { type: String, required: false },
    description: { type: String, required: false },
    capacity: { type: Number, required: false },
    time: { type: String, required: false },
    acquisition: { type: String, required: false },
    day: { type: String, required: false },
    providerId: { type: exports.Schema.Types.ObjectId, ref: 'Provider', required: false }
}, { collection: 'products' });
const ProductsModel = mongoose_1.default.model('Products', exports.Products);
exports.default = ProductsModel;
