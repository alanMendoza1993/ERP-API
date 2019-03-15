"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuariosLista {
    constructor() {
        this.lista = [];
    }
    //Agregar Usuario
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    actualizarNombre(id, userid) {
        console.log(id);
        console.log(userid);
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.userid = userid;
                break;
            }
        }
        console.log('===Actualizando Usuario');
        console.log(this.lista);
    }
    getLista() {
        return this.lista;
    }
    getUsuario(id) {
        return this.lista.find((usuario) => usuario.id === id);
    }
    //obtener usuarios en una sala en particular
    getUsuariosSala(sala) {
        return this.lista.filter(usuario => {
            return usuario.sala === sala;
        });
    }
    //borrar usuario
    borrarUsuario(id) {
        const temUser = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => {
            return usuario.id !== id;
        });
        return temUser;
    }
}
exports.UsuariosLista = UsuariosLista;
