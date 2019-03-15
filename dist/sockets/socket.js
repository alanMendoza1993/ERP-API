"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_lista_1 = require("../class/usuarios-lista");
const usuario_1 = require("../class/usuario");
exports.usuariosConectados = new usuarios_lista_1.UsuariosLista();
exports.conectarCliente = (cliente, io) => {
    const usuario = new usuario_1.Usuario(cliente.id);
    exports.usuariosConectados.agregar(usuario);
};
exports.desconectar = (cliente, io) => {
    cliente.on('disconnect', () => {
        exports.usuariosConectados.borrarUsuario(cliente.id);
        console.log('cliente desconectado otra vez');
        io.emit('usuariosActivos', exports.usuariosConectados.getLista());
    });
};
exports.signIn = (cliente, io) => {
    cliente.on('signIn', (usuario) => {
        let token = null;
        console.log(usuario);
        return token;
        /* usuariosConectados.borrarUsuario(cliente.id);
        console.log('cliente desconectado');
        io.emit('usuariosActivos', usuariosConectados.getLista()); */
    });
};
exports.configUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (usuario, callback) => {
        io.emit('usuariosActivos', exports.usuariosConectados.getLista());
        exports.usuariosConectados.actualizarNombre(cliente.id, usuario.nombre);
        callback({
            ok: true,
            mensaje: `Usuario ${usuario.nombre} configurado`
        });
    });
}; /*
export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('mensaje', (mensaje: { de:string, cuerpo:string}) => {
        console.log('el mensaje es', mensaje);
        io.emit('mensajeNuevo', mensaje);
    });
}
 */
//escuchar ligas añadidas
/* export const addleague = (cliente: Socket) => {
    cliente.on('addleague', (nombre:string) => {
            console.log('liga añadida', nombre);
      

    });
} */
