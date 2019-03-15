import { Socket } from 'socket.io';
import { UsuariosLista } from '../class/usuarios-lista';
import { Usuario } from '../class/usuario';
import MaterialsModel from '../class/material';




export const usuariosConectados = new UsuariosLista();

export const conectarCliente = (cliente: Socket,  io: SocketIO.Server) => {
    const usuario = new Usuario(cliente.id);
    usuariosConectados.agregar(usuario);

}
export const desconectar = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('disconnect', () => {

        usuariosConectados.borrarUsuario(cliente.id);
        console.log('cliente desconectado otra vez');
        io.emit('usuariosActivos', usuariosConectados.getLista());

    });
}
export const signIn = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('signIn', (usuario: Usuario) => {

        let token = null;

        console.log(usuario);


        return token;

        /* usuariosConectados.borrarUsuario(cliente.id);
        console.log('cliente desconectado');
        io.emit('usuariosActivos', usuariosConectados.getLista()); */

    });
}

export const configUsuario = (cliente: Socket, io:SocketIO.Server) => {
   
    cliente.on('configurar-usuario', ( usuario: any, callback: Function) => {
        io.emit('usuariosActivos', usuariosConectados.getLista());

        usuariosConectados.actualizarNombre(cliente.id,usuario.nombre);
        callback({
            ok:true,
            mensaje:`Usuario ${usuario.nombre} configurado`
        });
    });
}/* 
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


