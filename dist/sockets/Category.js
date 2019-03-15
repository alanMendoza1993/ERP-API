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
const System_CategoryProduct_1 = __importDefault(require("../class/System_CategoryProduct"));
exports.CreateCategory = (cliente, io) => __awaiter(this, void 0, void 0, function* () {
    cliente.on('createCategory', (category, callback) => __awaiter(this, void 0, void 0, function* () {
        console.log(category);
        if (!category) {
            return callback({
                ok: false,
                error: "No se ha recibido nada"
            });
        }
        category = new System_CategoryProduct_1.default({
            name: category.name,
            description: category.description
        });
        category.save((err, categorySave) => {
            if (err) {
                return callback({
                    ok: true,
                    err
                });
            }
            console.log(categorySave);
            callback({
                ok: true,
                mensaje: 'Nueva categoria guardada'
            });
            io.emit('reloadCategory');
            /*             return console.log('emitiendo');
             */
        });
    }));
});
