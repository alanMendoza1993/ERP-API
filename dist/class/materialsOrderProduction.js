"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.MaterialsOrderProduction = new exports.Schema({
    products: [{
            productId: { type: exports.Schema.Types.ObjectId, ref: 'ProductsInt', required: false },
            quantity: { type: Number, required: false }
        }],
    orderProductionId: { type: exports.Schema.Types.ObjectId, ref: 'ProductsInt', required: false }
}, { collection: 'ordersProduction' });
const MaterialsOrderProductionModel = mongoose_1.default.model('MaterialsOrderProduction', exports.MaterialsOrderProduction);
exports.default = MaterialsOrderProductionModel;
