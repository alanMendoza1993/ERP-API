"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const accountsProvider_1 = __importDefault(require("../class/accountsProvider"));
const nodeMailer = __importStar(require("nodemailer"));
const jwt = __importStar(require("jsonwebtoken"));
const enviroment_1 = require("../global/enviroment");
exports.signProvider = (cliente, io) => {
    cliente.on('signProvider', (usuario, callback) => {
        console.log('la contraseña es =========== ', usuario.password);
        console.log('el email es =========== ', usuario.email);
        let token;
        if (!usuario.password) {
            return callback({
                ok: false,
                error: "No ingresaste la contrasena"
            });
        }
        if (!usuario.email) {
            return callback({
                ok: false,
                error: "No ingresaste un email"
            });
        }
        accountsProvider_1.default.find({ email: usuario.email, password: usuario.password }, (err, usuarioDB) => {
            if (err) {
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'error al guardar'
                });
            }
            console.log('el usuario=========', usuarioDB);
            if (usuarioDB.length === 0) {
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
exports.addAccount = (cliente, io) => {
    cliente.on('addAccount', (obj, callback) => {
        if (!obj.email) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun catalogo"
            });
        }
        var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
        var contraseña = "";
        for (let i = 0; i < 8; i++) {
            contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        accountsProvider_1.default.find({ email: obj.email }, (err, exist) => {
            if (err)
                return callback({ ok: 'warning', mensaje: 'problemas al guardar' });
            console.log('encontrooooo ', exist.length);
            if (exist.length != 0) {
                return callback({ ok: 'warning', mensaje: 'Ese correo ya esta registrado' });
            }
            let cuenta = new accountsProvider_1.default({
                email: obj.email,
                providerId: obj.providerId,
                password: contraseña,
                active: true
            });
            cuenta.save((err, cuenta) => {
                if (err) {
                    console.log(err);
                    return callback({
                        ok: false,
                        mensaje: 'error al guardar',
                        err: err
                    });
                }
                let transporter = nodeMailer.createTransport({
                    service: 'gmail',
                    secure: true,
                    auth: {
                        user: 'mxtelecom2019@gmail.com',
                        pass: 't3l3commx2019'
                    }
                });
                let mailOptions = {
                    from: '"SteelComplements" <mxtelecom2019@gmail.com>',
                    to: cuenta.email,
                    subject: 'Tu cuenta a sido creada',
                    text: 'tu cuenta a sido creada con exito tus datos son los siguientes: \n contraseña: ' + cuenta.password,
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log('·················error es·········:    ', error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                    callback({
                        ok: 'Exito',
                        mensaje: 'Cuennta Agregada'
                    });
                });
            });
        });
        /*  io.emit('reloadCatalogue');
         return console.log('emitiendo'); */
    });
};
/* export const OneCatalogue =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('catalogueById', async (id: any, callback: Function) => {
        console.log(id);
        
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }
        
        let catalogueOne = await CatalogueModel.findById(id);
        
            console.log(catalogueOne);
            callback({
                ok: true,
                catalogueOne
            });
        });
    
} */
/* export const RemoveCatalogue =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('removeCatalogue', async (id: any, callback: Function) => {
        console.log(id);
        
        if (!id) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun ID"
            });
        }

        let catalogueOne = await CatalogueModel.findById(id);

        
        CatalogueModel.remove(catalogueOne, (err) => {
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
        });
    
} */
/* export const UpdateCatalogue =async (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('updateCatalogue', async (newCatalogue: any, callback: Function) => {
        console.log(newCatalogue);
        
        if (!newCatalogue) {
            return callback({
                ok: false,
                error: "No se ha recibido ningun Catalogo"
            });
        }

        CatalogueModel.findById(newCatalogue._id, (err, encontrado) => {
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
        });
    
} */
