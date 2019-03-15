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
const System_Element_1 = __importDefault(require("../class/System_Element"));
exports.ElementCatalogue = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('elementCatalogue', (elementE, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log(elementE);
        if (!elementE) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        let element = new System_Element_1.default({
            name: elementE.name,
            discount: elementE.discount,
            value: elementE.value,
            currency: elementE.currency,
            image: elementE.image,
            idCatalogue: elementE.idCatalogue
        });
        element.save((err, elementSave) => {
            if (err) {
                return callback({
                    ok: true,
                    err
                });
            }
            console.log(element);
            callback({
                ok: true,
                mensaje: 'Elemento guardadillo'
            });
            io.emit('reloadElement');
            /*             return console.log('emitiendo');
             */
        });
    }));
});
exports.ElementById = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('elementById', (id, callback) => __awaiter(this, void 0, void 0, function* () {
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        let element = yield System_Element_1.default.find({ idCatalogue: id });
        if (!element) {
            return callback({
                ok: true,
                mensaje: 'erorr al traer datos'
            });
        }
        else {
            callback({
                ok: true,
                element
            });
        }
    }));
});
exports.RemoveElement = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('removeElement', (id, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log(id);
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        let elementOne = yield System_Element_1.default.findById(id);
        System_Element_1.default.remove(elementOne, (err) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: false,
                    error: "problemas al buscar Elementos",
                    err
                });
            }
            callback({
                ok: true,
                mensaje: 'Elemento eliminado'
            });
            io.emit('reloadElement');
            return console.log('emitiendo');
        });
    }));
});
exports.UpdateElement = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('updateElement', (newElement, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log(newElement);
        if (!newElement) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun Elemento"
            });
        }
        System_Element_1.default.findById(newElement._id, (err, encontrado) => {
            if (err) {
                return callback({
                    ok: false,
                    error: "error al buscar cElemento"
                });
            }
            if (!encontrado) {
                return callback({
                    ok: false,
                    error: "No existe celemento"
                });
            }
            encontrado.name = newElement.name;
            encontrado.image = newElement.image;
            encontrado.currency = newElement.currency;
            encontrado.discount = newElement.discount;
            encontrado.value = newElement.value;
            encontrado.idCatalogue = newElement.idCatalogue;
            encontrado.save((err, elementGuardado) => {
                if (err) {
                    return callback({
                        ok: false,
                        error: "error al guardar",
                        err
                    });
                }
                callback({
                    ok: true,
                    medico: elementGuardado
                });
            });
        });
    }));
});
