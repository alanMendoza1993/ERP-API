"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productsInt_1 = __importDefault(require("../class/productsInt"));
exports.createProductInt = (cliente, io) => {
    cliente.on('createProductInt', (products, callback) => {
        console.log('este es el pinche id que manda juan: ', products);
        console.log('#########################################################');
        products = new productsInt_1.default({
            name: products.name,
            description: products.description,
            accessories: products.accessories,
            caliber: products.caliber,
            cover: products.cover,
            high: products.high,
            install: products.install,
            long: products.long,
            molding: products.molding,
            parallel: products.parallel,
            quantity: products.quantity,
            size: products.size,
            thickness: products.thickness,
            width: products.width
        });
        console.log(products);
        products.save((err, productGuardado) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: false,
                    mensaje: 'A ocurrido un problema al guardar',
                    err: 'el error es: ' + err
                });
            }
            console.log(productGuardado);
            callback({
                ok: true,
                mensaje: 'Producto Creado',
            });
        });
    });
};
exports.deleteProductInt = (cliente, io) => {
    cliente.on('deleteProductInt', (id, callback) => {
        productsInt_1.default.findByIdAndDelete(id, (err, deleted) => {
            if (err)
                return callback({ ok: false });
            callback({ ok: true, deleted });
        });
    });
};
exports.getProductInt = (cliente, io) => {
    cliente.on('getProductInt', (obj, callback) => {
        console.log('entrando a getProduct');
        let filters = obj.filters || {};
        console.log('entrando a get product con id', obj.id);
        productsInt_1.default.find(filters, (err, encontrado) => {
            console.log(encontrado);
            callback({
                ok: false,
                obj: encontrado
            });
        });
    });
};
/* export const getProductsInt = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('getProductsInt', (obj: any, callback: Function) => {

      
        let filters = obj.filters || {};
        if (!filters.category) console.log('no hai id');
        console.log('los filtros son ',filters);
        ProductsIntModel.find(filters,(err, encontrado) => {
            if(err) console.log('el error es el siguiente ',err);
            console.log('productos encontrados ',encontrado);
            callback({
                ok: false,
                obj: encontrado
            });
        }).populate('category','category.providerId');

               

       

    });
} */ 
