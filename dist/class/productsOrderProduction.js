"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.ProductsOrderBuy = new exports.Schema({
    idProduct: { type: exports.Schema.Types.ObjectId, ref: 'ProductsInt', required: false },
    quantity: { type: Number, required: false },
    orderProductionId: { type: exports.Schema.Types.ObjectId, ref: 'ProductsInt', required: false }
}, { collection: 'productsOrdersProduction' });
const ProductsOrderProductionModel = mongoose_1.default.model('ProductsOrderBuy', exports.ProductsOrderBuy);
exports.default = ProductsOrderProductionModel;
