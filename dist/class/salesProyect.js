"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.Schema = mongoose_1.default.Schema;
exports.SalesProyect = new exports.Schema({
    orderProductionId: { type: exports.Schema.Types.ObjectId, ref: 'OrderProduction', required: false },
    oc: { type: Boolean, required: false, default: false },
    dateFinish: { type: Date, required: false },
    materials: [{
            product: { type: exports.Schema.Types.ObjectId, ref: 'Products', required: false },
            name: { type: String, required: false },
            id: { type: exports.Schema.Types.ObjectId, ref: 'Materials', required: true },
            quantity: { type: Number, required: false },
            quantityPending: { type: Number, required: false }
        }]
}, { collection: 'salesProyect' });
const ProductsModel = mongoose_1.default.model('SalesProyect', exports.SalesProyect);
exports.default = ProductsModel;
