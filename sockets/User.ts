import { Socket } from 'socket.io';
import * as jwt from 'jsonwebtoken';
import UsersModel from '../class/user';
import {SEED} from '../global/enviroment';

export const verifyToken = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('verifyToken', (usuario: { token: string}, callback: Function) => {
   
        
       
        if (!usuario.token) {
            return callback({
                ok: false,
                error: "No enviaste token"
            });
        }

       
        jwt.verify(usuario.token, SEED, (err, decoded) => {
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
}

export const signIn = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('signIn', (usuario: { roster: number, password: string}, callback: Function) => {
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


        UsersModel.findOne({ roster: usuario.roster, password: usuario.password }, (err, usuarioDB) => {
            if(err){
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'error al guardar'
                });
            }
            console.log('el usuario=========', usuarioDB);
            if(!usuarioDB){
                return callback({
                    ok: 'warning',
                    status: 'Error',
                    obj: 'error, no se encontro usuario con sus datos'
                });
            }
            var token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 14400 });

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
}

export const createUser = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createUser', (user: any, callback: Function) => {

        user = new UsersModel({
            roster: user.roster,
            perfilType: user.perfilType,
            userName: user.userName,
            status: user.status,
            email: user.email,
            password: user.password,
            employeeId: user.employeeId,
        });
        console.log(user);
        
        user.save((err:Error, userSaved: Response) => {
            if(err){
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
}