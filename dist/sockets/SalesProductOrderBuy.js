"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productsOrderBuy_1 = __importDefault(require("../class/productsOrderBuy"));
exports.getProductsOrderBuy = (cliente, io) => {
    cliente.on('getProductsOrderBuy', (obj, callback) => {
        let filters = obj.filters || {};
        if (!filters.orderBuyId)
            console.log('no hai id');
        console.log('los filtros son ', filters);
        productsOrderBuy_1.default.find(filters, (err, encontrado) => {
            if (err)
                console.log('el error es el siguiente ', err);
            console.log('productos encontrados ', encontrado);
            callback({
                ok: 'success',
                status: 'Exito',
                obj: encontrado
            });
        }) /* .populate({path: 'Provider'}) */;
    });
};
