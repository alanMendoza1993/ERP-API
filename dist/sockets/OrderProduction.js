"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderProduction_1 = __importDefault(require("../class/orderProduction"));
const salesProyect_1 = __importDefault(require("../class/salesProyect"));
exports.createOrderProduction = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('createOrderProduction', (order, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log('ejecutando create material', order);
        products = yield order.material;
        var products;
        order = new orderProduction_1.default({
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
            let productsN = new salesProyect_1.default({
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
exports.deleteOrder = (cliente, io) => {
    cliente.on('deleteOrder', (id, callback) => {
        orderProduction_1.default.findByIdAndDelete(id, (err, deleted) => {
            if (err)
                return callback({ ok: false });
            callback({ ok: true, deleted });
        });
    });
};
exports.editOrderProduction = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('editOrderProduction', (order, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log('ejecutando create material');
        let id = order.id;
        console.log('Este es el order material  que se guarda ', order.material);
        if (!id)
            callback({ ok: 'warning', status: 'Error', obj: 'sin id' });
        orderProduction_1.default.findById(id, (err, search) => {
            search.producedBy = order.producedBy,
                search.cc = order.cc,
                search.bank = order.bank,
                search.shopping = true,
                search.material = order.material;
            let saleProyect = new salesProyect_1.default({
                orderProductionId: id,
                materials: order.material
            });
            saleProyect.materials.forEach((element) => {
                element.quantityPending = element.quantity;
            });
            saleProyect.save((err, guardado) => {
                if (err)
                    console.log('no guardado el sale');
                if (!err)
                    console.log('si se guardo el sale');
            });
            search.save((err, guardado) => {
                if (err) {
                    console.log('error al guardar');
                    return callback({
                        ok: 'warning',
                        status: 'Error',
                        obj: 'error al guardar',
                        err
                    });
                }
                callback({
                    ok: 'success',
                    status: 'Exito',
                    obj: 'orden guardada'
                });
            });
        });
    }));
});
exports.giveOrderProduction = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('getOrderProduction', (obj, callback) => __awaiter(this, void 0, void 0, function* () {
        let filters = obj.filters || {};
        console.log(filters);
        orderProduction_1.default.find(filters, (err, ordersSaved) => {
            console.log(ordersSaved);
            callback({
                ok: 'success',
                status: 'Error',
                obj: ordersSaved
            });
        });
    }));
});
exports.trueOrderProduction = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('trueOrderProduction', (obj, callback) => __awaiter(this, void 0, void 0, function* () {
        let id = obj.id || {};
        orderProduction_1.default.findById({ id }, (err, ordersSaved) => {
            if (err)
                console.log('error al buscar orden');
            ordersSaved.shopping = true;
            ordersSaved.save((err, guardado) => {
                if (err)
                    console.log('error al guardar dato');
                callback({
                    ok: 'success',
                    status: 'Exito',
                    obj: 'Compra aceptada'
                });
            });
        });
    }));
});
