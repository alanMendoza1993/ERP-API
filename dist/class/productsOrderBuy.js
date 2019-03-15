"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.ProductsOrderBuy = new exports.Schema({
    idProduct: { type: exports.Schema.Types.ObjectId, ref: 'Products', required: false },
    quantity: { type: Number, required: false },
    price: { type: Number, required: false },
    name: { type: String, required: false },
    orderBuyId: { type: exports.Schema.Types.ObjectId, ref: 'OrderBuy', required: false }
}, { collection: 'productsOrdersBuy' });
const ProductsOrderBuyModel = mongoose_1.default.model('ProductsOrderBuy', exports.ProductsOrderBuy);
exports.default = ProductsOrderBuyModel;
