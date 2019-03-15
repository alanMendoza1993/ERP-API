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
exports.load = (cliente, io) => {
    cliente.on('load', (tabla, callback) => __awaiter(this, void 0, void 0, function* () {
        var object;
        if (!tabla) {
            return callback({
                ok: false,
                error: "No se ha recibido ninguna tabla"
            });
        }
        if (tabla == 'catalogue') {
            object = yield System_Catalogue_1.default.find();
            console.log(object);
        }
        if (object) {
            callback({
                ok: true,
                obj: object
            });
        }
        else {
            return callback({
                ok: false,
                mensaje: 'error al guardar'
            });
        }
    }));
};
