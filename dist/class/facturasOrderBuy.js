"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.FacturasOrderBuy = new exports.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false }
}, { collection: 'facturasOrderBuy' });
const FacturasOrderBuyModel = mongoose_1.default.model('FacturasOrderBuy', exports.FacturasOrderBuy);
exports.default = FacturasOrderBuyModel;
