"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const user_1 = __importDefault(require("../class/user"));
const enviroment_1 = require("../global/enviroment");
exports.verifyToken = (cliente, io) => {
    cliente.on('verifyToken', (usuario, callback) => {
        if (!usuario.token) {
            return callback({
                ok: false,
                error: "No enviaste token"
            });
        }
        jwt.verify(usuario.token, enviroment_1.SEED, (err, decoded) => {
            if (err) {
                return callback({
                    ok: false,
                    error: "error al verificar"
                });
            }
            callback({
                ok: true,
                status: 'Exito',
                decoded
            });
        });
    });
};
exports.signIn = (cliente, io) => {
    cliente.on('signIn', (usuario, callback) => {
        console.log('la contraseña es =========== ', usuario.password);
        console.log('la nomina es =========== ', usuario.roster);
        let token = 'dfwefq13223';
        if (!usuario.password) {
            return callback({
                ok: false,
                error: "No ingresaste la contrasena"
            });
        }
        if (!usuario.roster) {
            return callback({
                ok: false,
                error: "No ingresaste numer de nomina"
            });
        }
        user_1.default.findOne({ roster: usuario.roster, password: usuario.password }, (err, usuarioDB) => {
            if (err) {
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'error al guardar'
                });
            }
            console.log('el usuario=========', usuarioDB);
            if (!usuarioDB) {
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'error, no se encontro usuario con sus datos'
                });
            }
            var token = jwt.sign({ usuario: usuarioDB }, enviroment_1.SEED, { expiresIn: 14400 });
            callback({
                ok: 'success',
                status: 'Exito',
                obj: token
            });
        });
        /*    usuariosConectados.borrarUsuario(cliente.id);
          console.log('cliente desconectado');
          io.emit('usuariosActivos', usuariosConectados.getLista());  */
    });
};
exports.createUser = (cliente, io) => {
    cliente.on('createUser', (user, callback) => {
        user = new user_1.default({
            roster: user.roster,
            perfilType: user.perfilType,
            userName: user.userName,
            status: user.status,
            email: user.email,
            password: user.password,
            employeeId: user.employeeId,
        });
        console.log(user);
        user.save((err, userSaved) => {
            if (err) {
                console.log(err);
                return callback({
                    ok: false,
                    mensaje: 'A ocurrido un problema al guardar',
                    err: 'el error es: ' + err
                });
            }
            console.log('Estas creando un usuariooooooooooooooooooooooooooo');
            console.log(userSaved);
            callback({
                ok: true,
                mensaje: 'User Creado',
            });
        });
    });
};
