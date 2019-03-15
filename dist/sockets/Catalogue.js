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
const System_Catalogue_1 = __importDefault(require("../class/System_Catalogue"));
exports.createCatalogue = (cliente, io) => {
    cliente.on('createCatalogue', (catalogue, callback) => {
        console.log(catalogue);
        if (!catalogue) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun catalogo"
            });
        }
        let catalogueN = new System_Catalogue_1.default({
            name: catalogue.name,
            element_name: catalogue.element_name,
            element_currency: catalogue.element_currency,
            element_image: catalogue.element_image,
            element_discount: catalogue.element_discount,
            element_value: catalogue.element_value
        });
        catalogueN.save((err, catalogueSave) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: false,
                    mensaje: 'error al guardar',
                    err: err
                });
            }
            console.log(catalogueSave);
            callback({
                ok: true,
                mensaje: 'Catalogo Guardado'
            });
            io.emit('reloadCatalogue');
            return console.log('emitiendo');
        });
    });
};
exports.OneCatalogue = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('catalogueById', (id, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log(id);
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        let catalogueOne = yield System_Catalogue_1.default.findById(id);
        console.log(catalogueOne);
        callback({
            ok: true,
            catalogueOne
        });
    }));
});
exports.RemoveCatalogue = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('removeCatalogue', (id, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log(id);
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        let catalogueOne = yield System_Catalogue_1.default.findById(id);
        System_Catalogue_1.default.remove(catalogueOne, (err) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: false,
                    error: "problemas al buscar medicos",
                    err
                });
            }
            callback({
                ok: true,
                mensaje: 'catalogo eliminado'
            });
            io.emit('reloadCatalogue');
            return console.log('emitiendo');
        });
    }));
});
exports.UpdateCatalogue = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('updateCatalogue', (newCatalogue, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log(newCatalogue);
        if (!newCatalogue) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun Catalogo"
            });
        }
        System_Catalogue_1.default.findById(newCatalogue._id, (err, encontrado) => {
            if (err) {
                return callback({
                    ok: false,
                    error: "error al buscar catalogo"
                });
            }
            if (!encontrado) {
                return callback({
                    ok: false,
                    error: "No existe catalogo"
                });
            }
            encontrado.name = newCatalogue.name;
            encontrado.element_name = newCatalogue.element_name;
            encontrado.element_imagen = newCatalogue.element_imagen;
            encontrado.element_currency = newCatalogue.element_currency;
            encontrado.element_discount = newCatalogue.element_discount;
            encontrado.element_value = newCatalogue.element_value;
            encontrado.save((err, catalgoGuardado) => {
                if (err) {
                    return callback({
                        ok: false,
                        error: "error al guardar",
                        err
                    });
                }
                callback({
                    ok: true,
                    medico: catalgoGuardado
                });
            });
        });
    }));
});
