"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFacturasOrderBuy = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('createFacturasOrderBuy', (order, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log('ejecutando create material', order);
        products = yield order.material;
        var products;
        order = new OrderProductionModel({
            noPetition: order.noPetition,
            nameProyect: order.nameProyect,
            client: order.client,
            dateCreate: new Date(),
            dateFinish: order.dateFinish,
        });
        console.log('imprimiendo los productos fuera del save', products);
        order.save((err, orderSaved) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'A ocurrido un problema al guardar',
                    err: 'el error es: ' + err
                });
            }
            console.log('imprimiemndo los productos dentro del save', products);
            let materials = [];
            products.forEach(element => {
                materials.push({ id: element.productId, quantity: element.quantity, quantityPending: element.quantity, name: element.name });
            });
            let productsN = new SalesProyectModel({
                orderProductionId: orderSaved._id,
                materials: materials,
                oc: false,
                dateFinish: order.dateFinish
            });
            productsN.save((err, productSave) => {
                if (err) {
                    return callback({
                        ok: 'warning',
                        status: 'Error',
                        obj: 'A ocurrido un problema al guardar',
                        err: 'el error es: ' + err
                    });
                }
                callback({
                    ok: 'success',
                    status: 'Exito',
                    obj: 'Nueva Orden de Produccion Creada',
                });
            });
        });
    }));
});
