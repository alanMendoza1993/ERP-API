import { Socket } from 'socket.io';
import EmployedModel from '../class/employed';
import { callbackify } from 'util';

/* export const signIn = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('signIn', (usuario: { noNomina: number, password: string}, callback: Function) => {

        let token = null;
        if (!usuario.password) {
            return callback({
                ok: false,
                error: "No ingresaste la contrasena"
            });
        }
        if (!usuario.noNomina) {
            return callback({
                ok: false,
                error: "No ingresaste la contrasena"
            });
        }


        EmployedModel.findOne({ email: body.email }, (err, usuarioDB) => {
        });
        

        callback({
            ok: true,
            token
        });
        

        /* usuariosConectados.borrarUsuario(cliente.id);
        console.log('cliente desconectado');
        io.emit('usuariosActivos', usuariosConectados.getLista()); 

    });
} */

export const createUser = (cliente:Socket, io: SocketIO.Server) => {
    cliente.on('createUser', (employer: any, callback: Function) => {

        
        employer = new EmployedModel({
            rfc_employer : employer.rfc_employer, 
            rp: employer.rp,
            labor_union: employer.labor_union,
            number_account: employer.number_account,
            union: employer.union,
            period: employer.period,
            journe_type: employer.journe_type,
            payment_type: employer.payment_type,
            payment: employer.payment,
            day_salari:employer.day_salari ,
            regime: employer.regime,
            password: employer.password,
            noNomina: employer.noNomina,
            perfilType: employer.perfilType,
            status: employer.status,
            name: employer.name,
            lastName: employer.lastName,
            country: employer.country,
            state: employer.state,
            birth_city: employer.birth_city,
            birth:employer.birth,
            sex: employer.sex,
            civil: employer.civil,
            weight: employer.weight,
            height: employer.height,
            curp: employer.curp,
            rfc: employer.rfc,
            nss: employer.nss,
            umf: employer.umf,
            email: employer.email,
            phone: employer.phone,
            cellphone: employer.cellphone,
            street: employer.street,
            noExt: employer.noExt,
            noInt: employer.noInt,
            colony: employer.colony,
            dateEntry: employer.dateEntry,
            job: employer.job,
            bank: employer.bank,
            sdInt: employer.sdInt,
            typeJob: employer.typeJob,
            typeContract: employer.typeContract,
            branch: employer.branch
                });
                console.log(employer);
                employer.save((err:Error, usuarioGuardado: Response) => {
                    if(err){
                        console.log(err);
                        return callback({
                            ok: false,
                            mensaje: 'A ocurrido un problema al guardar',
                            err: 'el error es: ' + err
                        });
                    }
                    console.log(usuarioGuardado);

                    callback({
                        ok: true,
                        mensaje: 'Usuario Creado',
            
                    });

                });
        

       

    });
}