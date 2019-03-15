"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("../class/products"));
exports.createProduct = (cliente, io) => {
    cliente.on('createProduct', (products, callback) => {
        products = new products_1.default({
            name: products.name,
            title: products.title,
            sku: products.sku,
            waitTime: products.waitTime,
            rode: products.rode,
            ivaType: products.ivaType,
            costing: products.costing,
            IEPStype: products.IEPStype,
            category: products.category,
            production: products.production,
            description: products.description,
            capacity: products.capacity,
            time: products.time,
            day: products.day,
            acquisition: products.acquisition,
            providerId: products.providerId,
            unitSize: products.unitSize,
            minPurchase: products.minPurchase,
            ID: products.ID,
            noProduct: products.noProduct,
            code: products.code,
            vol: products.vol,
            weight: products.weight,
            price: products.price,
            iva: products.iva,
            MN: products.MN,
            IEPS: products.IEPS,
            type: products.type,
            typeBuy: products.typeBuy,
            fdi: products.fdi,
            fdiU: products.fdiU
        });
        console.log(products);
        products.save((err, productGuardado) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: 'warning',
                    obj: 'A ocurrido un problema al guardar',
                    status: 'Error'
                });
            }
            console.log(productGuardado);
            callback({
                ok: 'success',
                obj: 'Producto Creado',
                status: 'Exito'
            });
        });
    });
};
exports.deleteProduct = (cliente, io) => {
    cliente.on('deleteProduct', (id, callback) => {
        products_1.default.findByIdAndDelete(id, (err, deleted) => {
            if (err)
                return callback({ ok: false });
            callback({ ok: true, deleted });
        });
    });
};
exports.getProduct = (cliente, io) => {
    cliente.on('getProduct', (obj, callback) => {
        let filters = obj.filters || {};
        console.log('entrando a get product con id', obj.id);
        products_1.default.find(filters, (err, encontrado) => {
            console.log(encontrado);
            callback({
                ok: 'false',
                obj: encontrado
            });
        });
    });
};
exports.getProducts = (cliente, io) => {
    cliente.on('getProducts', (obj, callback) => {
        let filters = obj.filters || {};
        if (!filters.category)
            console.log('no hai id');
        console.log('los filtros son ', filters);
        products_1.default.find(filters, (err, encontrado) => {
            if (err)
                console.log('el error es el siguiente ', err);
            console.log('productos encontrados ', encontrado);
            callback({
                ok: false,
                obj: encontrado
            });
        }) /* .populate({path: 'Provider'}) */;
    });
};
exports.getProductsProvider = (cliente, io) => {
    cliente.on('getProductsProvider', (obj, callback) => {
        let filters = obj.filters || {};
        if (!filters.category)
            console.log('no hai id');
        console.log('los filtros son ', filters);
        products_1.default.find(filters).populate('providerId').exec((err, encontrado) => {
            if (err)
                console.log('el error es el siguiente ', err);
            console.log('productos encontrados ', encontrado);
            callback({
                ok: false,
                obj: encontrado
            });
        });
    });
};
exports.editProducts = (cliente, io) => {
    cliente.on('editProducts', (obj, callback) => {
        console.log('ididididididididididididididididiidid ', obj.model.productId);
        products_1.default.findById(obj.model.productId, (err, productSearch) => {
            if (err) {
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'Error al buscar el producto'
                });
            }
            if (!productSearch) {
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'no se encontro ningun producto con ese id'
                });
            }
            productSearch.category = obj.model.category,
                productSearch.providerId = obj.model.providerId;
            productSearch.save((err, save) => {
                if (err) {
                    return callback({
                        ok: 'warning',
                        status: 'Error',
                        obj: 'Error al guardar el producto'
                    });
                }
                callback({
                    ok: 'success',
                    status: 'Exito',
                    obj: 'Producto actualizado',
                    save
                });
            });
        });
    });
};
